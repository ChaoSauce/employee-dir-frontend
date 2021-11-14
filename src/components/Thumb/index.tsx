import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Image } from './Thumb.styles';

// Types
type Props = {
  image: string;
  name: string;
  email: string;
  phone: string;
}

const Thumb: React.FC<Props> = ({ image, name, email, phone }) => (
  <div>
    <Wrapper>
      <Image src={image} alt='employee-thumb' />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </Wrapper>
  </div>
);

export default Thumb;