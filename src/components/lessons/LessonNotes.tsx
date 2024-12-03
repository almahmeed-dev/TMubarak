import React, { useState } from 'react';
import { useNotesStore } from '../../stores/useNotesStore';
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';
import { PenSquare, Trash2 } from 'lucide-react';

interface LessonNotesProps {
  lessonId: string;
}

export default function LessonNotes({ lessonId }: LessonNotesProps) {
  const { notes, addNote, updateNote, deleteNote, getNotesByLesson } = useNotesStore();
  const [newNote, setNewNote] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  const lessonNotes = getNotesByLesson(lessonId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    if (editingNoteId) {
      updateNote(editingNoteId, newNote);
      setEditingNoteId(null);
    } else {
      addNote(lessonId, newNote);
    }
    setNewNote('');
  };

  const handleEdit = (noteId: string, content: string) => {
    setEditingNoteId(noteId);
    setNewNote(content);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">ملاحظاتي</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="اكتب ملاحظاتك هنا..."
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {editingNoteId ? 'تحديث الملاحظة' : 'إضافة ملاحظة'}
        </button>
      </form>

      <div className="space-y-4">
        {lessonNotes.map((note) => (
          <div key={note.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(note.timestamp, { locale: ar, addSuffix: true })}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(note.id, note.content)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <PenSquare className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            <p className="whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}