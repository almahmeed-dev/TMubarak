import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  QueryConstraint 
} from 'firebase/firestore';
import { db } from '../utils/firebase';

interface QueryOptions {
  collectionName: string;
  constraints?: QueryConstraint[];
  limitCount?: number;
}

export function useFirebaseQuery<T>({ collectionName, constraints = [], limitCount }: QueryOptions) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const queryConstraints = [...constraints];
        
        if (limitCount) {
          queryConstraints.push(limit(limitCount));
        }

        const q = query(collection(db, collectionName), ...queryConstraints);
        const querySnapshot = await getDocs(q);
        
        const results = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];

        setData(results);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ أثناء جلب البيانات');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, JSON.stringify(constraints), limitCount]);

  return { data, loading, error };
}