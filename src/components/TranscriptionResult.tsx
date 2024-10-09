import React, { useState } from 'react';
import { Copy, Download, Edit } from 'lucide-react';

interface TranscriptionResultProps {
  result: string;
  format: string;
}

const TranscriptionResult: React.FC<TranscriptionResultProps> = ({ result, format }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedResult, setEditedResult] = useState(result);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedResult);
  };

  const handleDownload = () => {
    const blob = new Blob([editedResult], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcription.${format === 'plain' ? 'txt' : format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="mt-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        {isEditing ? (
          <textarea
            value={editedResult}
            onChange={(e) => setEditedResult(e.target.value)}
            className="w-full h-40 p-2 border border-gray-300 rounded"
          />
        ) : (
          <pre className="whitespace-pre-wrap">{editedResult}</pre>
        )}
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={handleCopy}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <Copy size={18} />
        </button>
        <button
          onClick={handleDownload}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Download size={18} />
        </button>
        <button
          onClick={handleEdit}
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          <Edit size={18} />
        </button>
      </div>
    </div>
  );
};

export default TranscriptionResult;