import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Note {
  id: string;
  lessonId: string;
  content: string;
  timestamp: number;
}

interface NotesState {
  notes: Note[];
  addNote: (lessonId: string, content: string) => void;
  updateNote: (noteId: string, content: string) => void;
  deleteNote: (noteId: string) => void;
  getNotesByLesson: (lessonId: string) => Note[];
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: [],

      addNote: (lessonId, content) => {
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: crypto.randomUUID(),
              lessonId,
              content,
              timestamp: Date.now()
            }
          ]
        }));
      },

      updateNote: (noteId, content) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === noteId
              ? { ...note, content, timestamp: Date.now() }
              : note
          )
        }));
      },

      deleteNote: (noteId) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== noteId)
        }));
      },

      getNotesByLesson: (lessonId) => {
        return get().notes.filter((note) => note.lessonId === lessonId);
      }
    }),
    {
      name: 'user-notes'
    }
  )
);