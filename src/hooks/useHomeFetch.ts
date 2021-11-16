import { useState, useEffect } from 'react';

// API
import API, { Employee } from '../api';

const initialState = {
  page: 1,
  results: [] as Employee[]
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchEmployees = async (page: number, query = '') => {
    try {
      setError(false);
      setLoading(true);

      const response = await API.fetchEmployees(query, page);

      setState(prev => ({
        page,
        results: [...prev.results, ...response.employees]
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchEmployees(1, '');
  }, []);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchEmployees(state.page + 1, '');
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  return { state, loading, error, setIsLoadingMore };
};