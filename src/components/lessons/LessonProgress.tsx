import React from 'react';
import { CheckCircle, BookmarkPlus, BookmarkMinus } from 'lucide-react';
import { useProgressStore } from '../../stores/useProgressStore';

interface LessonProgressProps {
  lessonId: string;
}

export default function LessonProgress({ lessonId }: LessonProgressProps) {
  const { 
    isLessonCompleted, 
    addCompletedLesson,
    isLessonFavorited,
    toggleFavorite 
  } = useProgressStore();

  const completed = isLessonCompleted(lessonId);
  const favorited = isLessonFavorited(lessonId);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => addCompletedLesson(lessonId)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          completed
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <CheckCircle className="w-5 h-5" />
        {completed ? 'تم الإكمال' : 'تحديد كمكتمل'}
      </button>

      <button
        onClick={() => toggleFavorite(lessonId)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          favorited
            ? 'bg-yellow-100 text-yellow-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {favorited ? (
          <>
            <BookmarkMinus className="w-5 h-5" />
            إزالة من المفضلة
          </>
        ) : (
          <>
            <BookmarkPlus className="w-5 h-5" />
            إضافة للمفضلة
          </>
        )}
      </button>
    </div>
  );
}