import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  padding: 40px 20px;
  animation: animateEmployeeInfo 1s;
  height: 100vh;

  @keyframes animatedEmployeeInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--white);
  z-index: 100;

  button {
    padding: 5px;
    width: 70px;
    background-color: white;
    margin: 2px;
    border-radius: 5px;
    
    :hover {
      cursor: pointer;
      background-color: var(--lightGrey);
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 10px 40px 20px 40px;
  color: var(--white);
  overflow: hidden;

  .employee-info {
    display: flex;
    flex-direction: column;
  }

  .info {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  h4 {
    width: 120px;
    margin-right: 10px;
  }

  h2 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  input, select {
    width: 50%;
    height: 30px;
    border: 1px solid var(--darkGray);
    border-radius: 5px;
    padding: 5px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  span {
    color: darkred;
    font-size: var(--fontMed)
  }
`;
