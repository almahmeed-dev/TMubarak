import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

interface CommentFormProps {
  onSubmit: (text: string) => Promise<void>;
  placeholder?: string;
}

export default function CommentForm({ 
  onSubmit, 
  placeholder = 'اكتب تعليقك هنا...' 
}: CommentFormProps) {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      setIsSubmitting(true);
      await onSubmit(text);
      setText('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
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
  );
}