import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">المعلم مبارك</span>
            </div>
            <p className="text-sm">
              منصة تعليمية متخصصة في المواد التجارية لطلاب مملكة البحرين
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lessons" className="hover:text-blue-400 transition-colors">الدروس</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">المدونة</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">من أنا</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">اتصل بي</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">معلومات الاتصال</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+973 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>مملكة البحرين</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">تابعني على</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} المعلم مبارك. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}