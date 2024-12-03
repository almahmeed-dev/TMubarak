import React, { useState } from 'react';
import { Download, Check, X } from 'lucide-react';
import Button from '../ui/Button';
import { useOfflineStorage } from '../../hooks/useOfflineStorage';

interface DownloadButtonProps {
  lessonId: string;
  resourceUrl: string;
  type: 'video' | 'document' | 'image';
}

export default function DownloadButton({ lessonId, resourceUrl, type }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { saveResource, getResource } = useOfflineStorage();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setError(null);

      // Check if already downloaded
      const existingResource = await getResource(lessonId);
      if (existingResource) {
        setDownloadComplete(true);
        return;
      }

      // Download the resource
      const response = await fetch(resourceUrl);
      if (!response.ok) throw new Error('Failed to download resource');

      const blob = await response.blob();
      await saveResource({
        id: lessonId,
        url: resourceUrl,
        type,
        blob
      });

      setDownloadComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to download');
    } finally {
      setIsDownloading(false);
    }
  };

  if (error) {
    return (
      <Button
        variant="danger"
        icon={<X className="w-5 h-5" />}
        onClick={handleDownload}
      >
        فشل التحميل - حاول مرة أخرى
      </Button>
    );
  }

  if (downloadComplete) {
    return (
      <Button
        variant="secondary"
        icon={<Check className="w-5 h-5" />}
        disabled
      >
        تم التحميل
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      icon={<Download className="w-5 h-5" />}
      loading={isDownloading}
      onClick={handleDownload}
    >
      تحميل للمشاهدة بدون إنترنت
    </Button>
  );
}