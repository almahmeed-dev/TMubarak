import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  message: string;
}

export default function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
      <div className="flex items-center">
        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
        <span className="text-green-700">{message}</span>
      </div>
    </div>
  );
}