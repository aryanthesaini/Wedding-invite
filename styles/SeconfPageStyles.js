import styled from 'styled-components';

export const MainPage = styled.div`
  height: 100vh;
  background: #557c70;
  display: flex;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;
export const Data = styled.div`
  width: 50%;
  h1 {
    font-family: 'Great Vibes', cursive;
    font-weight: 100;
    font-size: 3rem;
  }
  h4 {
    width: 50%;
    font-weight: 200;
    margin-top: 3rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 2.5rem;
    }
    h4 {
      width: 80%;
    }
  }
`;

export const DataHeading = styled.div`
  margin-top: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
`;

export const DataSubheading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80');
  background-size: cover;
  background-position: center;
  height: 27rem;
  width: 20rem;
  border-radius: 10rem;
  border: 2px solid white;
  @media (max-width: 768px) {
    margin-top: 4.5rem;
    height: 15rem;
    width: 15rem;
  }
`;
