import React from 'react';
import { Download, Share2, Bookmark } from 'lucide-react';
import Button from '../ui/Button';
import { exportToPDF } from '../../utils/pdfExport';
import { trackShare } from '../../utils/analytics';

interface LessonActionsProps {
  lessonId: string;
  title: string;
}

export default function LessonActions({ lessonId, title }: LessonActionsProps) {
  const handleExportPDF = async () => {
    const success = await exportToPDF('lesson-content', `${title}-ملخص`);
    if (!success) {
      alert('حدث خطأ أثناء تصدير الملف');
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        url: window.location.href
      });
      trackShare('lesson', lessonId);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="secondary"
        icon={<Download className="w-5 h-5" />}
        onClick={handleExportPDF}
      >
        تحميل PDF
      </Button>
      <Button
        variant="secondary"
        icon={<Share2 className="w-5 h-5" />}
        onClick={handleShare}
      >
        مشاركة
      </Button>
      <Button
        variant="secondary"
        icon={<Bookmark className="w-5 h-5" />}
      >
        حفظ
      </Button>
    </div>
  );
}