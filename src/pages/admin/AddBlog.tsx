import React, { useState } from 'react';
import { Plus, X, Upload } from 'lucide-react';
import RichTextEditor from '../../components/editor/RichTextEditor';
import Button from '../../components/ui/Button';
import { useFirebaseUpload } from '../../hooks/useFirebaseUpload';
import { collections } from '../../utils/firebase';

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    tags: [''],
  });

  const { uploadFile, progress, url: imageUrl, error: uploadError } = useFirebaseUpload('blog-images');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadFile(file);
      if (imageUrl) {
        setFormData(prev => ({ ...prev, image: imageUrl }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const addTag = () => {
    setFormData(prev => ({
      ...prev,
      tags: [...prev.tags, '']
    }));
  };

  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const updateTag = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.map((tag, i) => i === index ? value : tag)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">إضافة مقال جديد</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">معلومات المقال</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                عنوان المقال
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                مقدمة المقال
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={2}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                محتوى المقال
              </label>
              <RichTextEditor
                value={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                صورة المقال
              </label>
              <div className="mt-1 flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer bg-white px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  رفع صورة
                </label>
                {progress > 0 && progress < 100 && (
                  <div className="text-sm text-gray-600">
                    جاري الرفع... {progress}%
                  </div>
                )}
              </div>
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-4 rounded-lg max-h-48 object-cover"
                />
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">الكلمات المفتاحية</h2>
          
          <div className="space-y-3">
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => updateTag(index, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="كلمة مفتاحية"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTag}
              className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg"
            >
              <Plus className="w-5 h-5" />
              إضافة كلمة مفتاحية
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          icon={<Upload className="w-5 h-5" />}
        >
          نشر المقال
        </Button>
      </form>
    </div>
  );
}