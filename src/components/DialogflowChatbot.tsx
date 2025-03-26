"use client";

import { useEffect } from 'react';

const DialogflowChatbot = () => {
  useEffect(() => {
    // Add the required scripts and styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <df-messenger
        project-id="big-sunup-454805-h1"
        agent-id="7a701cac-a65f-4aa8-8257-ce81ae5e4dd7"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="Northstar"></df-messenger-chat-bubble>
      </df-messenger>
      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #000;
          --df-messenger-font-family: Google Sans;
          --df-messenger-chat-background: #f3f6fc;
          --df-messenger-message-user-background: #d3e3fd;
          --df-messenger-message-bot-background: #fff;
          bottom: 16px;
          right: 16px;
        }
      `}</style>
    </>
  );
};

export default DialogflowChatbot; 