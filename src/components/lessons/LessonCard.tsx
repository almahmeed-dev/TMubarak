import React from 'react';
import { Play, Clock } from 'lucide-react';
import type { VideoLesson } from '../../types';

interface LessonCardProps {
  lesson: VideoLesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{lesson.subject}</span>
          <span className="text-sm text-gray-500">{lesson.level}</span>
        </div>
        <h3 className="font-semibold mb-2">{lesson.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          <span>{lesson.date}</span>
        </div>
      </div>
    </div>
  );
}