import React from 'react';
import Hero from '../components/home/Hero';
import LessonCard from '../components/lessons/LessonCard';
import BlogCard from '../components/blog/BlogCard';

const recentLessons = [
  {
    id: '1',
    title: 'حل المعادلات التربيعية',
    description: 'شرح مفصل لطريقة حل المعادلات التربيعية باستخدام القانون العام',
    subject: 'الرياضيات',
    level: 'الثانوي',
    videoUrl: 'https://youtube.com/watch?v=...',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    date: '2024/03/15'
  }
];

const recentPosts = [
  {
    id: '1',
    title: 'نصائح للمذاكرة الفعالة',
    excerpt: 'تعرف على أفضل الطرق للمذاكرة وتنظيم الوقت للحصول على أفضل النتائج',
    content: '',
    date: '2024/03/14',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">أحدث الدروس</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentLessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">أحدث المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}