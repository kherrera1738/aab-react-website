import styled from "styled-components";

export const SRContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 30%;
  justify-content: center;

  @media (min-width: 1200px) and (max-width: 1300px) {
    grid-template-columns: 65%;
  }

  @media screen and (max-width: 1199px) {
    grid-template-columns: 90%;
  }
`;

export const ServicesContainer = styled.div`
  background-color: white;
  display: grid;
`;
