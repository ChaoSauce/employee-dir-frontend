import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  
  a {
    text-decoration: none;
  }
`;

export const Brand = styled.h3`
  width: 200px;
  color: var(--white);

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;