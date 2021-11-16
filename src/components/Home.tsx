import React from 'react';

// Components
import Spinner from './Spinner';
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import Button from './Button';

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// TODO: potentially add total_pages to API responses so we can use it to determine if we should display the Load More button
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