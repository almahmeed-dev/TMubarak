import React, { useState } from 'react';
import { Search, GraduationCap, Plus, LogOut, Menu, PenSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MobileNav from './MobileNav';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">المعلم مبارك</span>
            </div>
            
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن الدروس..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute left-3 top-2.5">
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
              </form>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">الرئيسية</Link>
              <Link to="/lessons" className="text-gray-700 hover:text-blue-600">الدروس</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">المدونة</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">من أنا</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">اتصل بي</Link>
              {user ? (
                <>
                  <Link
                    to="/admin/add-lesson"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    إضافة درس
                  </Link>
                  <Link
                    to="/admin/add-blog"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <PenSquare className="w-5 h-5" />
                    إضافة مقال
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600"
                  >
                    <LogOut className="w-5 h-5" />
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600"
                >
                  تسجيل الدخول
                </Link>
              )}
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 py-3 border-t">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="ابحث عن الدروس..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute left-3 top-2.5">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </form>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}