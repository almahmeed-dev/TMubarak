import React from 'react';
import { Home, Files, Share, Trash2, Palette, Bell, Settings, Folder, Layout, Globe, Smartphone } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'الرئيسية' },
  { icon: Files, label: 'جميع الملفات' },
  { icon: Share, label: 'مشاركة معي' },
  { icon: Trash2, label: 'الملفات المحذوفة' },
  { icon: Palette, label: 'التصميم' },
  { icon: Bell, label: 'الإشعارات' },
  { icon: Settings, label: 'الإعدادات' },
];

const folderItems = [
  { icon: Folder, label: 'ملفات سارة' },
  { icon: Layout, label: 'لوحة التحكم' },
  { icon: Globe, label: 'المواقع' },
  { icon: Smartphone, label: 'تطبيقات الجوال' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-4 border-l">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Files className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold">واجهة المستخدم</span>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <item.icon className="w-5 h-5 text-gray-600" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="mt-8">
        <div className="text-sm font-medium text-gray-500 mb-2 px-3">المجلدات</div>
        {folderItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <item.icon className="w-5 h-5 text-gray-600" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}