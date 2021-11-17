import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Content = styled.div`
  min-height: 70vh;
  background: var(--white);
  width: 70%;
  padding: 10px 30px;
  overflow: hidden;
  
  input, select {
    width: 100%;
    height: 50px;
    border: 1px solid var(--medGrey);
    border-radius: 2px;
    margin: 15px 0;
    padding: 10px;
    font-size: var(--fontSmall);

    @media screen and (max-width: 768px) {
      height: 30px;
      font-size: 80%;
      padding: 0 10px;
    }
  }

  .form-group {
    display: flex;
    justify-content: space-between;

    input, select {
      width: 49%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      max-width: 70%;
      font-size: var(--fontSmall);


    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  .error {
    color: firebrick;
  }

  .success {
    color: green;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`;