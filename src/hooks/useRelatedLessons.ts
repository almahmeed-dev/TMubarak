import { useEffect, useState } from 'react';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import type { VideoLesson } from '../types';

export function useRelatedLessons(currentLessonId: string, tags: string[], maxResults = 3) {
  const [lessons, setLessons] = useState<VideoLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedLessons = async () => {
      try {
        setLoading(true);
        const lessonsRef = collection(db, 'lessons');
        
        // Query lessons that share at least one tag
        const q = query(
          lessonsRef,
          where('tags', 'array-contains-any', tags),
          where('id', '!=', currentLessonId),
          limit(maxResults)
        );

        const querySnapshot = await getDocs(q);
        const relatedLessons = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as VideoLesson[];

        setLessons(relatedLessons);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ أثناء جلب الدروس المتعلقة');
      } finally {
        setLoading(false);
      }
    };

    if (tags.length > 0) {
      fetchRelatedLessons();
    }
  }, [currentLessonId, tags]);

  return { lessons, loading, error };
}