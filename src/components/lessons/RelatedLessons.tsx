import React from 'react';
import { useRelatedLessons } from '../../hooks/useRelatedLessons';
import LessonCard from './LessonCard';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';

interface RelatedLessonsProps {
  lessonId: string;
  tags: string[];
}

export default function RelatedLessons({ lessonId, tags }: RelatedLessonsProps) {
  const { lessons, loading, error } = useRelatedLessons(lessonId, tags);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (lessons.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">دروس ذات صلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}