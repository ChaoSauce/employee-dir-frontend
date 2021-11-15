import { useState, useEffect } from 'react';
import API, { Employee } from '../api';

export const useEmployeeFetch = (employeeId: string | undefined) => {
  const [state, setState] = useState<Employee>({} as Employee);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        setError(false);

        const employee = await API.fetchEmployee(employeeId);

        setState({ ...employee });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  return { state, loading, error };
};