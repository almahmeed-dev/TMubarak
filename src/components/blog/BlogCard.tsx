import React from 'react';
import { Calendar } from 'lucide-react';
import type { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4 ml-1" />
          <span>{post.date}</span>
        </div>
        <h3 className="font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          اقرأ المزيد
        </button>
      </div>
    </div>
  );
}