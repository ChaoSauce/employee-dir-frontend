import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
      background-color: var(--medGrey);
      color: white;
      font-size: var(--fontBig);
      text-decoration: none;
      border: 1px solid var(--medGrey);
      border-radius: 30px;
      padding: 10px 15px;
      transition: all 0.3s;

      :hover {
        opacity: 0.8;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--fontSmall);
      }
    }
  }

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 2rem;
`;