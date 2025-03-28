'use client';

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { z } from 'zod';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

interface DownloadFormProps {
  projectName: string;
  brochurePath: string;
  onClose: () => void;
}

// Validation schema
const userSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
});

type UserData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  downloads: {
    [key: string]: {
      count: number;
      lastDownload: number;
      projectName: string;
    };
  };
};

const STORAGE_KEY = 'northstar_user_data';
const MAX_DOWNLOADS_PER_DAY = 5;
const DOWNLOAD_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function DownloadForm({ projectName, brochurePath, onClose }: DownloadFormProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [isNewUser, setIsNewUser] = useState(true);

  const handleDownload = async (userData: UserData) => {
    try {
      // Simulate download
      const link = document.createElement('a');
      link.href = brochurePath;
      link.download = `${projectName.toLowerCase().replace(/\s+/g, '-')}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      setTimeout(onClose, 2000);
    } catch (error) {
      throw error;
    }
  };

  const validateForm = () => {
    try {
      userSchema.parse(formData);
      setValidationErrors({});
      return true;
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!validateForm()) {
        setIsLoading(false);
        return;
      }

      if (!visitorId) {
        setError('Unable to identify your browser. Please try again.');
        setIsLoading(false);
        return;
      }

      // Send data to backend
      const response = await fetch('/api/download-brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          visitorId,
          projectName,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const userData = await response.json();
      await handleDownload(userData);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to process your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getVisitorId = async () => {
      try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        setVisitorId(result.visitorId);
        
        // Check if user exists in database
        const response = await fetch('/api/check-user', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-project-name': projectName 
          },
          body: JSON.stringify({ visitorId: result.visitorId }),
        });
        
        if (response.ok) {
          const userData = await response.json();
          if (userData.exists) {
            setIsNewUser(false);
            // For returning users, directly submit with their data
            const submitResponse = await fetch('/api/download-brochure', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...userData,
                visitorId: result.visitorId,
                projectName,
              }),
            });

            if (submitResponse.ok) {
              const downloadData = await submitResponse.json();
              await handleDownload(downloadData);
              return;
            }
          }
        }
        // Only set isNewUser to true and stop loading if we reach this point
        setIsNewUser(true);
      } catch (error) {
        console.error('Error getting visitor ID:', error);
        setError('Failed to check user status. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    getVisitorId();
  }, [projectName]);

  // Show loading state while checking user status
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Preparing your download...</p>
        </div>
      </div>
    );
  }

  // Only show form for new users
  if (isNewUser) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Download Brochure</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            Please fill in your details to download the brochure for {projectName}.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.first_name ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.first_name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.first_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.last_name ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.last_name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.last_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.email ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.phone ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
              )}
            </div>

            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}

            {success && (
              <div className="text-green-600 text-sm">
                Brochure downloaded successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? 'Downloading...' : 'Download Brochure'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // For returning users who had an error
  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
          <div className="text-red-600 mb-4">{error}</div>
          <button
            onClick={onClose}
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Return null if download is in progress
  return null;
} 