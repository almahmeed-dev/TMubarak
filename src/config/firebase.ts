import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCw_ANVZWV6twW0RGUAOTXJopR3_HeONUY",
  authDomain: "teacher-mubarak-338eb.firebaseapp.com",
  projectId: "teacher-mubarak-338eb",
  storageBucket: "teacher-mubarak-338eb.firebasestorage.app",
  messagingSenderId: "777725873186",
  appId: "1:777725873186:web:4603cdba7d151d98c7ce7b"
};

// Initialize Firebase only if it hasn't been initialized yet
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const collections = {
  lessons: 'lessons',
  blogs: 'blogs',
  comments: 'comments',
} as const;