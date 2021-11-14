import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: plum;
  padding: 0 2px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 2px 0;
  margin: 0 auto;
  
  a {
    text-decoration: none;
  }
`;

export const Brand = styled.p`
  font-size: var(--fontBig);
  width: 200px;
  color: var(--white);

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;