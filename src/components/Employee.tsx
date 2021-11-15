import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Spinner from './Spinner';

// Hook
import { useEmployeeFetch } from '../hooks/useEmployeeFetch';

const Employee: React.FC = () => {
  const { employeeId } = useParams();

  const { state: employee, loading, error } = useEmployeeFetch(employeeId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div>This is the employee page</div>
  );
};

export default Employee;