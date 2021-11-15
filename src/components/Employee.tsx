import React from 'react';
import { useParams } from 'react-router-dom';

const Employee: React.FC = () => {
  const { employeeId } = useParams();

  return (
    <div>This is the employee page</div>
  );
};

export default Employee;