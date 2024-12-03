import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  completedLessons: string[];
  watchHistory: { lessonId: string; timestamp: number }[];
  favorites: string[];
  addCompletedLesson: (lessonId: string) => void;
  addToWatchHistory: (lessonId: string) => void;
  toggleFavorite: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonFavorited: (lessonId: string) => boolean;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      watchHistory: [],
      favorites: [],

      addCompletedLesson: (lessonId) => {
        set((state) => ({
          completedLessons: [...new Set([...state.completedLessons, lessonId])]
        }));
      },

      addToWatchHistory: (lessonId) => {
        set((state) => ({
          watchHistory: [
            { lessonId, timestamp: Date.now() },
            ...state.watchHistory.filter((item) => item.lessonId !== lessonId)
          ].slice(0, 50) // Keep only last 50 items
        }));
      },

      toggleFavorite: (lessonId) => {
        set((state) => ({
          favorites: state.favorites.includes(lessonId)
            ? state.favorites.filter((id) => id !== lessonId)
            : [...state.favorites, lessonId]
        }));
      },

      isLessonCompleted: (lessonId) => {
        return get().completedLessons.includes(lessonId);
      },

      isLessonFavorited: (lessonId) => {
        return get().favorites.includes(lessonId);
      }
    }),
    {
      name: 'user-progress'
    }
  )
);