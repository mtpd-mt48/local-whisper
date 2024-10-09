import React from 'react';

interface TranscriptionOptionsProps {
  transcriptionFormat: string;
  setTranscriptionFormat: (format: string) => void;
  whisperModel: string;
  setWhisperModel: (model: string) => void;
}

const TranscriptionOptions: React.FC<TranscriptionOptionsProps> = ({
  transcriptionFormat,
  setTranscriptionFormat,
  whisperModel,
  setWhisperModel,
}) => {
  return (
    <div className="mt-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Transcription Format
        </label>
        <select
          value={transcriptionFormat}
          onChange={(e) => setTranscriptionFormat(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="plain">Plain Text</option>
          <option value="srt">SRT</option>
          <option value="vtt">VTT</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Whisper Model
        </label>
        <select
          value={whisperModel}
          onChange={(e) => setWhisperModel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="tiny">Tiny</option>
          <option value="base">Base</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};

export default TranscriptionOptions;