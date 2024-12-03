import React from 'react';
import { Shield } from 'lucide-react';

interface SecurityCardProps {
  percentage: number;
}

export default function SecurityCard({ percentage }: SecurityCardProps) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <div className="font-medium">أمان حسابك {percentage}%</div>
          <div className="text-sm text-gray-600">
            يرجى مراجعة إعدادات الأمان بانتظام وتحديث كلمة المرور الخاصة بك
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
          تجاهل
        </button>
        <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          مراجعة الأمان
        </button>
      </div>
    </div>
  );
}