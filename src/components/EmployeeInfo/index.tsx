import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';

// Components
import Thumb from '../Thumb';

// Styles
import { Wrapper, Content, Text, Buttons } from './EmployeeInfo.styles';

// Types
import { Employee } from '../../api';

type Props = {
  employee: Employee;
};

const EmployeeInfo: React.FC<Props> = ({ employee }) => {
  const [email, setEmail] = useState(employee.email);
  const [department, setDepartment] = useState(employee.department);
  const [phone, setPhone] = useState(employee.phone);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleEditSave = async () => {
    if (toggleEdit) {
      const response = await API.updateEmployee(employee._id, {
        email,
        department,
        phone
      });

      if (response.msg) {
        setError(response.msg);
      } else {
        setError('');
        setToggleEdit(prev => !prev);
      }
    } else {
      setToggleEdit(prev => !prev);
    }
  };

  const handleDelete = async () => {
    const response = await API.deleteEmployee(employee._id);

    if (response.msg) {
      setError(response.msg);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Content>
        <Buttons>
          <button type='button' className='btnEdit' onClick={handleEditSave}>{toggleEdit ? 'Save' : 'Edit'}</button>
          <button type='button' className='btnDelete' onClick={handleDelete}>Delete</button>
        </Buttons>
        <Thumb
          image={employee.picture.large}
          clickable={false}
        />
        <Text>
          {error && <span>Error: {error}</span>}
          <h2>{employee.name.first} {employee.name.last}</h2>
          <div className='employee-info'>
            <div className='info'>
              <h4>Email</h4>
              {toggleEdit ?
                (
                  <input
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                  />
                ) : (
                  <p>{email}</p>
                )}
            </div>
            <div className='info'>
              <h4>Department</h4>
              {toggleEdit ?
                (
                  <select
                    value={department}
                    onChange={e => setDepartment(e.currentTarget.value)}
                  >
                    <option>Accounting</option>
                    <option>Engineering</option>
                    <option>HR</option>
                    <option>Sales</option>
                    <option>Other</option>
                  </select>
                ) : (
                  <p>{department}</p>
                )}
            </div>
            <div className='info'>
              <h4>Phone</h4>
              {toggleEdit ?
                (
                  <input
                    value={phone}
                    onChange={e => setPhone(e.currentTarget.value)}
                  />
                ) : (
                  <p>{phone}</p>
                )}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper >
  )
};

export default EmployeeInfo;
