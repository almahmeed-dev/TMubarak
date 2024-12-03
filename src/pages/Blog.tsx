import React from 'react';
import BlogCard from '../components/blog/BlogCard';

const posts = [
  {
    id: '1',
    title: 'نصائح للمذاكرة الفعالة',
    excerpt: 'تعرف على أفضل الطرق للمذاكرة وتنظيم الوقت للحصول على أفضل النتائج',
    content: '',
    date: '2024/03/14',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'
  },
  {
    id: '2',
    title: 'كيف تستعد للاختبارات النهائية',
    excerpt: 'خطوات عملية للاستعداد للاختبارات النهائية وتحقيق أفضل النتائج',
    content: '',
    date: '2024/03/13',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  },
  {
    id: '3',
    title: 'أهمية التعلم الذاتي',
    excerpt: 'اكتشف كيف يمكن للتعلم الذاتي أن يساعدك في تطوير مهاراتك وتحقيق أهدافك',
    content: '',
    date: '2024/03/12',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">المدونة التعليمية</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}