import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <GraduationCap className="w-20 h-20 text-blue-200" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            مرحباً بكم في موقع المعلم مبارك
          </h1>
          
          <p className="text-2xl mb-12 text-blue-100">
            منصة تعليمية متخصصة في المواد التجارية لطلاب مملكة البحرين
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lessons"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-blue-50 transition-colors group"
            >
              <BookOpen className="w-5 h-5" />
              استعرض الدروس
            </Link>
          </div>

          {/* Featured Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700">
              <div className="text-3xl font-bold mb-2">قصد 101</div>
              <div className="text-blue-200">المادة المتوفرة حالياً</div>
            </div>
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700">
              <div className="text-3xl font-bold mb-2">المرحلة الثانوية</div>
              <div className="text-blue-200">المستوى التعليمي</div>
            </div>
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700">
              <div className="text-3xl font-bold mb-2">مجاناً</div>
              <div className="text-blue-200">للجميع</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}