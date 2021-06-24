import styled from "styled-components";

export const SBContainer = styled.div`
  display: grid;
  grid-template-columns: 65%;
  justify-content: center;

  @media screen and (max-width: 1199px) {
    grid-template-columns: 90%;
  }
`;

export const ImgsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  background-color: white;

  @media (min-width: 1900px) and (max-width: 2150px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 1700px) and (max-width: 1899px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1550px) and (max-width: 1699px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1549px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
