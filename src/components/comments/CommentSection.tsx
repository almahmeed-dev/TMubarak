import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

interface Comment {
  id: string;
  text: string;
  userId: string;
  userName: string;
  createdAt: Date;
}

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (text: string) => Promise<void>;
}

export default function CommentSection({ comments, onAddComment }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      setIsSubmitting(true);
      await onAddComment(newComment);
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold mb-6">التعليقات</h2>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="اكتب تعليقك هنا..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
            <Button
              type="submit"
              loading={isSubmitting}
              icon={<Send className="w-5 h-5" />}
            >
              إرسال
            </Button>
          </div>
        </form>
      ) : (
        <p className="text-center text-gray-600 mb-6">
          يرجى تسجيل الدخول للمشاركة في المناقشة
        </p>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">{comment.userName}</span>
              <span className="text-sm text-gray-500">
                {comment.createdAt.toLocaleDateString('ar-BH')}
              </span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}