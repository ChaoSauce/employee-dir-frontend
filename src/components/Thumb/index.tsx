import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.styles';

// Types
type Props = {
  image: string;
}

const Thumb: React.FC<Props> = ({ image }) => (
  <div>
    <Image src={image} alt='employee-thumb' />
  </div>
);

export default Thumb;