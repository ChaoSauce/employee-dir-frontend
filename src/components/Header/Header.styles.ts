import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
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
    
    @media screen and (max-width: 1280px) {
      margin-left: 5px;
    }
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