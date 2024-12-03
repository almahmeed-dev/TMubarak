import React from 'react';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">المعلم مبارك</h1>
          <p className="text-xl text-gray-600">معلم ومرشد تعليمي في مملكة البحرين</p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">نبذة عني</h2>
            <p className="text-gray-600 mb-6">
              مرحباً، أنا المعلم مبارك، أقوم بتدريس المواد الدراسية لجميع المراحل التعليمية في مملكة البحرين. 
              هدفي هو مساعدة الطلاب على فهم المواد الدراسية بطريقة سهلة وممتعة.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">15+ سنة</div>
                  <div className="text-sm text-gray-600">خبرة في التدريس</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">1000+</div>
                  <div className="text-sm text-gray-600">طالب وطالبة</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4">رؤيتي التعليمية</h2>
            <p className="text-gray-600 mb-6">
              أؤمن بأن كل طالب لديه القدرة على التفوق والنجاح. مهمتي هي توفير بيئة تعليمية
              داعمة ومحفزة تساعد الطلاب على اكتشاف قدراتهم وتحقيق أهدافهم الأكاديمية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}