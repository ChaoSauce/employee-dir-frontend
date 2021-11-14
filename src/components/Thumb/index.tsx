import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Image } from './Thumb.styles';

// Types
type Props = {
  image: string;
}

const Thumb: React.FC<Props> = ({ image }) => (
  <div>
    <Wrapper>
      <Image src={image} alt='employee-thumb' />
    </Wrapper>
  </div>
);

export default Thumb;