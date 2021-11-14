import React from 'react';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <div>This is the home page</div>
  )
};

export default Home;