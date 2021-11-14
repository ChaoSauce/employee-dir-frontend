import React from 'react';

// Components
import Grid from './Grid';
import Thumb from './Thumb';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <Grid>
        {state.results.map(employee => (
          <Thumb
            key={employee._id}
            image={employee.picture.large}
          />
        ))}
      </Grid>
    </>
  )
};

export default Home;