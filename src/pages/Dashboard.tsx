import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Bookmark, PenSquare } from 'lucide-react';
import { useProgressStore } from '../stores/useProgressStore';
import { useNotesStore } from '../stores/useNotesStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const { completedLessons, watchHistory, favorites } = useProgressStore();
  const { notes } = useNotesStore();

  const stats = [
    {
      icon: BookOpen,
      label: 'الدروس المكتملة',
      value: completedLessons.length
    },
    {
      icon: Clock,
      label: 'آخر مشاهدة',
      value: watchHistory.length
    },
    {
      icon: Bookmark,
      label: 'المفضلة',
      value: favorites.length
    },
    {
      icon: PenSquare,
      label: 'الملاحظات',
      value: notes.length
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">لوحة التحكم</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {watchHistory.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">آخر المشاهدات</h2>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {watchHistory.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/lessons/${item.lessonId}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>عنوان الدرس {item.lessonId}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(item.timestamp).toLocaleDateString('ar-BH')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {favorites.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">الدروس المفضلة</h2>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {favorites.map((lessonId, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/lessons/${lessonId}`)}
              >
                <div className="flex items-center gap-3">
                  <Bookmark className="w-5 h-5 text-yellow-500" />
                  <span>عنوان الدرس {lessonId}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {notes.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">آخر الملاحظات</h2>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {notes.slice(0, 5).map((note) => (
              <div
                key={note.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/lessons/${note.lessonId}`)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <PenSquare className="w-5 h-5 text-gray-400" />
                    <span>عنوان الدرس {note.lessonId}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(note.timestamp).toLocaleDateString('ar-BH')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{note.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}