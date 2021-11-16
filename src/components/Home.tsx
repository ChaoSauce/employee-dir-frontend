import React from 'react';

// Components
import Spinner from './Spinner';
import Grid from './Grid';
import Thumb from './Thumb';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
    setIsLoadingMore,
  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <Grid>
        {state.results.map(employee => (
          <Thumb
            key={employee._id}
            image={employee.picture.large}
            employeeId={employee._id}
            name={`${employee.name.first} ${employee.name.last}`}
            email={employee.email}
            phone={employee.phone}
            clickable
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )
};

export default Home;