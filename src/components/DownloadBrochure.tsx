'use client';

import { useState } from 'react';
import DownloadForm from './DownloadForm';

interface DownloadBrochureProps {
  projectName: string;
  brochurePath: string;
}

export default function DownloadBrochure({ projectName, brochurePath }: DownloadBrochureProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Download Brochure
      </button>

      {showForm && (
        <DownloadForm
          projectName={projectName}
          brochurePath={brochurePath}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
} 