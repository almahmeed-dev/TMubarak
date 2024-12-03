import React, { useEffect } from 'react';
import { Share2, ThumbsUp } from 'lucide-react';
import Button from '../ui/Button';
import VideoPlayer from '../video/VideoPlayer';
import LessonProgress from './LessonProgress';
import LessonNotes from './LessonNotes';
import ShareButtons from '../sharing/ShareButtons';
import { useProgressStore } from '../../stores/useProgressStore';
import type { VideoLesson } from '../../types';

interface LessonViewerProps {
  lesson: VideoLesson;
}

export default function LessonViewer({ lesson }: LessonViewerProps) {
  const { addToWatchHistory } = useProgressStore();
  const [showShare, setShowShare] = React.useState(false);
  const [likes, setLikes] = React.useState(0);

  useEffect(() => {
    addToWatchHistory(lesson.id);
  }, [lesson.id, addToWatchHistory]);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <VideoPlayer
        url={lesson.videoUrl}
        title={lesson.title}
        thumbnail={lesson.thumbnail}
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              icon={<Share2 className="w-5 h-5" />}
              onClick={() => setShowShare(!showShare)}
            >
              مشاركة
            </Button>
            <Button
              variant="secondary"
              icon={<ThumbsUp className="w-5 h-5" />}
              onClick={() => setLikes(prev => prev + 1)}
            >
              {likes > 0 ? likes : 'إعجاب'}
            </Button>
          </div>
        </div>

        {showShare && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <ShareButtons
              url={window.location.href}
              title={lesson.title}
              description={lesson.description}
            />
          </div>
        )}

        <LessonProgress lessonId={lesson.id} />

        <div className="prose prose-lg max-w-none mt-6">
          <p className="text-gray-600 mb-6">{lesson.description}</p>

          {lesson.objectives?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">الأهداف التعليمية</h2>
              <ul className="list-disc list-inside space-y-2">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-700">{objective}</li>
                ))}
              </ul>
            </div>
          )}

          {lesson.competencies?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">الكفايات التعليمية</h2>
              <ul className="list-disc list-inside space-y-2">
                {lesson.competencies.map((competency, index) => (
                  <li key={index} className="text-gray-700">{competency}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <LessonNotes lessonId={lesson.id} />

        {lesson.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {lesson.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}