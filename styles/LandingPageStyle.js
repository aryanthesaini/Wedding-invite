import styled from 'styled-components';

export const MainPage = styled.div`
  height: 100vh;
  background: #f6f2e7;

  text-align: center;
  h1 {
    font-family: 'Great Vibes', cursive;
    font-weight: 100;
    font-size: 6rem;
  }

  button {
    background: none;
    color: #557c70;
    margin-top: 4rem;
    padding: 1rem 4rem;
    font-weight: 200;
    border: 1px solid #557c70;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    button {
      margin-top: 8rem;
      padding: 1rem 1.5rem;
    }
  }
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 12rem;
  h1 {
    font-family: 'Great Vibes', cursive;
    font-weight: 100;
    font-size: 6rem;
    color: #557c70;
  }
  @media (max-width: 768px) {
    padding-top: 8rem;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    padding-top: 3rem;
    font-weight: 200;
    width: 30%;
    color: #557c70;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    h2 {
      font-size: 1rem;
      width: 80%;
    }
  }
`;
