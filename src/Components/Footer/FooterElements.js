import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 50px;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: end;
  justify-items: center;
  align-items: center;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #999;
  }
`;
