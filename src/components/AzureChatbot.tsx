"use client";
import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments, FaUser, FaTimes } from "react-icons/fa";

// Simple HTML sanitizer (basic for safe links)
const sanitizeHTML = (str: string) => {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
};

interface Message {
  role: "user" | "assistant";
  content: string;
  type?: "button" | "text"; // New property to define message type
}

const AzureChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbox = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState && messages.length === 0) {
        setMessages([
          {
            role: "assistant",
            content: "Hi, welcome to Northstar Homes! Are you looking for our projects in",
            type: "text", // Message type as text
          },
          {
            role: "assistant",
            content: "Hyderabad or Vizag?",
            type: "button", // Indicating that this message contains buttons
          },
        ]);
      }
      return newState;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        type: "text"
      };
      
      // Add location buttons after the response
      const locationButtons: Message = {
        role: "assistant",
        content: "Would you like to explore our projects in",
        type: "button"
      };

      setMessages((prev) => [...prev, assistantMessage, locationButtons]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          type: "text"
        },
        {
          role: "assistant",
          content: "Would you like to explore our projects in",
          type: "button"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationClick = (location: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: `Here are the ongoing projects in ${location}:`, type: "text" }
    ]);

    fetchProjects(location);
  };

  const fetchProjects = async (location: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `projects in ${location}` }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        type: "text"
      };

      // Add location buttons after the response
      const locationButtons: Message = {
        role: "assistant",
        content: "Would you like to explore our projects in",
        type: "button"
      };

      setMessages((prev) => [...prev, assistantMessage, locationButtons]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't fetch the projects at the moment.",
          type: "text"
        },
        {
          role: "assistant",
          content: "Would you like to explore our projects in",
          type: "button"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = (content: string) => {
    const linkified = content.replace(
      /(\[([^\]]+)\]\((\/[^\s)]+)\))|(\bhttps?:\/\/[^\s]+|\B\/[a-zA-Z0-9\-\/]+)/g,
      (match, mdLink, text, relativePath) => {
        if (mdLink) {
          return `<a href="${relativePath}" target="_blank" class="text-blue-600 underline">${text}</a>`;
        }
        return `<a href="${match}" target="_blank" class="text-blue-600 underline">${match}</a>`;
      }
    );
    return { __html: linkified };
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChatbox}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
      >
        <FaComments className="w-6 h-6" />
      </button>

      {/* Chat Window with animation */}
      <div
        className={`fixed bottom-20 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50 transform transition-all duration-300 ease-out origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <FaComments className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Northstar Assistant</h3>
          </div>
          <button onClick={toggleChatbox} className="hover:text-gray-200">
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                  }`}
              >
                <div className="flex items-start">
                  {message.role === "user" ? (
                    <FaUser className="w-5 h-5 mr-2 mt-1" />
                  ) : (
                    <FaComments className="w-5 h-5 mr-2 mt-1" />
                  )}
                  {message.type === "button" ? (
                    <div className="flex space-x-2">
                      <button
                        className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark"
                        onClick={() => handleLocationClick("Hyderabad")}
                      >
                        Hyderabad
                      </button>
                      <button
                        className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark"
                        onClick={() => handleLocationClick("Visakhapatnam")}
                      >
                        Vizag
                      </button>
                    </div>
                  ) : (
                    <div
                      className="whitespace-pre-wrap"
                      dangerouslySetInnerHTML={renderContent(message.content)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex items-center">
                  <FaComments className="w-5 h-5 mr-2" />
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AzureChatbot;
