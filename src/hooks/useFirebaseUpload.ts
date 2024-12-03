import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../utils/firebase';

interface UploadProgress {
  progress: number;
  url: string | null;
  error: string | null;
}

export function useFirebaseUpload(path: string) {
  const [uploadState, setUploadState] = useState<UploadProgress>({
    progress: 0,
    url: null,
    error: null,
  });

  const uploadFile = async (file: File) => {
    try {
      const storageRef = ref(storage, `${path}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadState((prev) => ({ ...prev, progress }));
        },
        (error) => {
          setUploadState((prev) => ({ ...prev, error: error.message }));
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadState((prev) => ({ ...prev, url }));
        }
      );
    } catch (error) {
      setUploadState((prev) => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'حدث خطأ أثناء رفع الملف' 
      }));
    }
  };

  return { uploadFile, ...uploadState };
}