import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

export function useSearch(collectionName: string) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (!searchTerm) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const searchTermLower = searchTerm.toLowerCase();
        
        const q = query(
          collection(db, collectionName),
          where('searchTerms', 'array-contains', searchTermLower)
        );

        const querySnapshot = await getDocs(q);
        const searchResults = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setResults(searchResults);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ أثناء البحث');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [searchTerm, collectionName]);

  return { searchTerm, setSearchTerm, results, loading, error };
}