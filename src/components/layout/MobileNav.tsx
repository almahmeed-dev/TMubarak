import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, PenSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800/50 backdrop-blur-sm lg:hidden">
      <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">القائمة</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              الرئيسية
            </Link>
            <Link 
              to="/lessons" 
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              الدروس
            </Link>
            <Link 
              to="/blog" 
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              المدونة
            </Link>
            <Link 
              to="/about" 
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              من أنا
            </Link>
            <Link 
              to="/contact" 
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg"
            >
              اتصل بي
            </Link>
            {user ? (
              <>
                <Link
                  to="/admin/add-lesson"
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  إضافة درس
                </Link>
                <Link
                  to="/admin/add-blog"
                  onClick={onClose}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                >
                  <PenSquare className="w-5 h-5" />
                  إضافة مقال
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-right w-full"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={onClose}
                className="px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                تسجيل الدخول
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}