import React, { useState } from 'react';
import { Search, BookOpen, GraduationCap } from 'lucide-react';
import LessonCard from '../components/lessons/LessonCard';

const lessons = [
  {
    id: '1',
    title: 'مقدمة في قصد 101',
    description: 'شرح مفصل لمفاهيم الاقتصاد الأساسية وأهميتها في الحياة العملية',
    subject: 'قصد 101',
    level: 'الثانوي',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    date: '2024/03/15'
  },
  {
    id: '2',
    title: 'العرض والطلب',
    description: 'دراسة العلاقة بين العرض والطلب وتأثيرها على السوق',
    subject: 'قصد 101',
    level: 'الثانوي',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
    date: '2024/03/14'
  },
  {
    id: '3',
    title: 'السوق والمنافسة',
    description: 'تحليل أنواع الأسواق وأشكال المنافسة في الاقتصاد',
    subject: 'قصد 101',
    level: 'الثانوي',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    date: '2024/03/13'
  }
];

export default function Lessons() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">دروس قصد 101</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن درس..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}