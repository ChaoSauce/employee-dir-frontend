import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content } from './Grid.styles';

// Types
type Props = {
  header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => (
  <Wrapper>
    <div className='header'>
      <h1>{header}</h1>
      <Link to='/new-employee'>
        Add Employee
      </Link>
    </div>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default Grid;
