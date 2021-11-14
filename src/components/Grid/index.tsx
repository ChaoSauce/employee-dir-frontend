import React from 'react';

// Styles
import { Wrapper, Content } from './Grid.styles';

const Grid: React.FC = ({ children }) => (
  <Wrapper>
    <h1>Employees</h1>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default Grid;
