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
  const [searchTerm, setSearchTerm] = useState('');

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

    const searchQuery = searchTerm ? `name=${searchTerm}` : '';
    fetchEmployees(1, searchQuery);
  }, [searchTerm]);

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    const searchQuery = searchTerm ? `name=${searchTerm}` : '';
    fetchEmployees(state.page + 1, searchQuery);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};