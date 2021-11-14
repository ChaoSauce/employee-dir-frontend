import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content, Brand } from './Header.styles';

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Brand>Employee Directory</Brand>
    </Content>
  </Wrapper>
);

export default Header;