import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  justify-items: center;
  background-color: #4c4c4c;
`;

export const CardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-items: center;
  justify-content: center;
  width: 70%;

  @media screen and (max-width: 2100px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1450px) {
    grid-template-columns: repeat(2, 40%);
  }

  @media (min-width: 576px) and (max-width: 950px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 100%;
  }
`;

export const CardBody = styled.div`
  background-color: white;
  border-radius: 0 0 15px 15px;
  max-width: 350px;

  @media screen and (max-width: 1450px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 950px) {
    width: 90%;
  }
`;

export const CardImgContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  width: 100%;
`;

export const CardTextContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h2`
  color: #660101;
`;

export const CardText = styled.p``;
