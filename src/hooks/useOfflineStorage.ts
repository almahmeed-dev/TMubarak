import { useState, useEffect } from 'react';
import { openDB } from 'idb';
import type { VideoLesson } from '../types';

const DB_NAME = 'teacher-mubarak-db';
const LESSONS_STORE = 'lessons';
const RESOURCES_STORE = 'resources';

interface Resource {
  id: string;
  url: string;
  type: 'video' | 'document' | 'image';
  blob: Blob;
}

export function useOfflineStorage() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initDB = async () => {
      const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(LESSONS_STORE)) {
            db.createObjectStore(LESSONS_STORE, { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains(RESOURCES_STORE)) {
            db.createObjectStore(RESOURCES_STORE, { keyPath: 'id' });
          }
        },
      });
      setIsInitialized(true);
      return db;
    };

    initDB();
  }, []);

  const saveLesson = async (lesson: VideoLesson) => {
    if (!isInitialized) return;
    const db = await openDB(DB_NAME, 1);
    await db.put(LESSONS_STORE, lesson);
  };

  const getLesson = async (lessonId: string) => {
    if (!isInitialized) return null;
    const db = await openDB(DB_NAME, 1);
    return db.get(LESSONS_STORE, lessonId);
  };

  const saveResource = async (resource: Resource) => {
    if (!isInitialized) return;
    const db = await openDB(DB_NAME, 1);
    await db.put(RESOURCES_STORE, resource);
  };

  const getResource = async (resourceId: string) => {
    if (!isInitialized) return null;
    const db = await openDB(DB_NAME, 1);
    return db.get(RESOURCES_STORE, resourceId);
  };

  const removeResource = async (resourceId: string) => {
    if (!isInitialized) return;
    const db = await openDB(DB_NAME, 1);
    await db.delete(RESOURCES_STORE, resourceId);
  };

  return {
    isInitialized,
    saveLesson,
    getLesson,
    saveResource,
    getResource,
    removeResource,
  };
}