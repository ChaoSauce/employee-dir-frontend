import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

// Types
type Props = {
  employeeName: string;
}

const BreadCrumb: React.FC<Props> = ({ employeeName }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{employeeName}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
