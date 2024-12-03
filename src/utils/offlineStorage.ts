import { openDB } from 'idb';

const DB_NAME = 'teacher-mubarak-db';
const STORE_NAME = 'offline-lessons';

export async function initDB() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
  return db;
}

export async function saveLesson(lessonId: string, lessonData: any) {
  const db = await initDB();
  await db.put(STORE_NAME, lessonData, lessonId);
}

export async function getLesson(lessonId: string) {
  const db = await initDB();
  return db.get(STORE_NAME, lessonId);
}

export async function getAllLessons() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

export async function deleteLesson(lessonId: string) {
  const db = await initDB();
  await db.delete(STORE_NAME, lessonId);
}