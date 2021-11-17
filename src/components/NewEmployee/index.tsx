import React, { useState } from 'react';

// API
import API from '../../api';

// Styles
import { Wrapper, Content } from './NewEmployee.styles';
import Button from '../Button';
import Spinner from '../Spinner';

const NewEmployee: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('Male');
  const [title, setTitle] = useState('Mr');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Accounting');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAddEmployee = async () => {
    setError('');
    setSuccess('');
    const response = await API.createEmployee({
      gender: gender.toLocaleLowerCase(),
      name: {
        title,
        first: firstName,
        last: lastName
      },
      email,
      phone: phone.toString(),
      department
    });

    if (response.msg) {
      setError(response.msg);
    } else {
      setSuccess('Employee created successfully.');
    }
  };

  return (
    <Wrapper>
      <Content>
        <div className='header'>
          <h2>Add Employee</h2>
          {error
            ? <p className='error'>{error}</p>
            : success && <p className='success'>{success}</p>
          }
        </div>

        <div className='form-group'>
          <select value={gender} onChange={e => setGender(e.currentTarget.value)}>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select value={title} onChange={e => setTitle(e.currentTarget.value)}>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Jr.</option>
            <option>Sr.</option>
            <option></option>
          </select>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            onChange={e => setFirstName(e.currentTarget.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={e => setLastName(e.currentTarget.value)}
          />
        </div>

        <input
          type='email'
          placeholder='Email'
          onChange={e => setEmail(e.currentTarget.value)}
        />

        <input
          type='tel'
          placeholder='Phone'
          onChange={e => setPhone(e.currentTarget.value)}
        />

        <select value={department} onChange={e => setDepartment(e.currentTarget.value)}>
          <option>Accounting</option>
          <option>Engineering</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Other</option>
        </select>

        {loading ? <Spinner /> : <Button text='Add Employee' callback={handleAddEmployee} />}
      </Content>
    </Wrapper>
  )
};

export default NewEmployee;
