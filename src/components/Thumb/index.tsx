import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Image } from './Thumb.styles';

// Types
type Props = {
  image: string;
  employeeId?: string;
  name?: string;
  email?: string;
  phone?: string;
  clickable: boolean;
}

const Thumb: React.FC<Props> = ({ image, employeeId, name, email, phone, clickable }) => (
  <div>
    <Wrapper>
      {clickable ? (
        <>
          <Link to={`/${employeeId}`}>
            <Image src={image} alt='employee-thumb' />
          </Link>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{phone}</p>
        </>
      ) : (
        <Image src={image} alt='employee-thumb' />
      )}
    </Wrapper>
  </div>
);

export default Thumb;