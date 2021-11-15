import React from 'react';

// Components
import Spinner from './Spinner';
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

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <Grid>
        {state.results.map(employee => (
          <Thumb
            key={employee._id}
            image={employee.picture.large}
            name={`${employee.name.first} ${employee.name.last}`}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </Grid>
    </>
  )
};

export default Home;