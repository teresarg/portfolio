import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.main`
  background-color: ${(props) => props.theme.bodyBg};
  box-sizing: border-box;
  color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 8rem 3rem 10rem;
  @media (min-width: 768px) {
    padding: 8rem 10rem 10rem;
  }
  @media (min-width: 1024px) {
    padding: 8rem 10rem 10rem;
  }
`;

const PageLayout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => <ContentWrapper>{children}</ContentWrapper>;

export { PageLayout };
