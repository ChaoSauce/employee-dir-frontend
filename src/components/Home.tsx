import React from 'react';

// Components
import Spinner from './Spinner';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home: React.FC = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Employees'}>
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
      {
        // TODO: potentially add total_pages to API responses so we can use it to determine if we should display the Load More button
        // For now we'll display the button if the length of employees is multiple of 20...
        !loading && (state.results.length % 20 === 0) && (
          <Button text='Load More' callback={() => setIsLoadingMore(true)} />
        )
      }
    </>
  )
};

export default Home;