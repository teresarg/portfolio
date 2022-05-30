import React from "react";
import styled from "styled-components";

const About = (): React.ReactElement => (
  <>
    <IntroductionTitle>
      Hey! I'm <span>Teresa Romero</span>, a frontend developer.
    </IntroductionTitle>
    <Description>
      I am a <span>frontend engineer </span>working remotly at{" "}
      <span>Olympic Channel</span> while based in Valencia, Spain.
      <br /> Currently, I am working mainly with React, Nextjs and Styled
      components. I love facing new chagenges and bringing my{" "}
      <span>entrepreneurial spirit</span> into coding! <br />
      During the last few years, I have been involve in initiatives to support
      and <span>empower women in technology</span>, such as organizing the first
      two successful editios of Women Techmakers Alicante.
    </Description>
  </>
);

const IntroductionTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 5rem;
  }
  @media (min-width: 1024px) {
    font-size: 8rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 3.5rem;
  text-align: center;
  span {
    font-size: 2rem;
    color: #a882ce;
  }
`;

export default About;