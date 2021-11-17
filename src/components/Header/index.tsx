import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

// Styles
import { Wrapper, Content, Brand } from './Header.styles';

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <Brand>Directory</Brand>
      </Link>
    </Content>
  </Wrapper>
);

export default Header;