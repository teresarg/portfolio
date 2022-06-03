import { Link as LinkReactRouter } from "react-router-dom";
import styled, { css } from "styled-components";

// Estilar un componente react
// Bulk styles
const Link = styled(LinkReactRouter)<{ isActive?: boolean }>`
  box-sizing: border-box;
  color: #a882ce;
  display: block;
  margin: auto 0;
  padding: 0.4rem 0.4rem;
  text-align: center;
  font-size: 1.4rem;
  /* font-weight: ${(prop) => (prop.isActive ? "bold" : "")};
  text-decoration: ${(prop) => (prop.isActive ? "underline" : "none")}; */
  ${(props) =>
    props.isActive
      ? css`
          font-weight: bold;
          text-decoration: underline;
        `
      : css`
          font-weight: initial;
          text-decoration: none;
        `};
  @media (min-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 1.6rem;
  }
`;

export { Link };
