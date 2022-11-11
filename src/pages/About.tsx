import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundButton } from "components";
import React from "react";
import styled from "styled-components";

const About = (): React.ReactElement => (
  <Wrapper>
    <section>
      <IntroductionTitle>
       Hey!👋 It's <span>Teresa Romero</span>, a frontend developer.
      </IntroductionTitle>
      <Description>
        Frontend Engineer who loves facing new challenges and bringing my{" "}
        <span>entrepreneurial spirit</span> into coding!
        <br />⚡️ React • Nextjs • Styled components • GraphQL
        <br /> <span>#Currently</span> Olympic Channel, <span>#Prev</span> Eventbrite
        <br /> <a href="https://www.womentechmakers.com/ambassadors/profiles/60eed536a06b305f58c9180e/teresa_romero"><span>#Women Techmakers ambassador</span></a>
      </Description>
      <LinksSection>
        <RoundButton as="a" href="https://twitter.com/teresaroga7">
          <FontAwesomeIcon icon={faTwitter} />
        </RoundButton>
        <RoundButton as="a" href="https://github.com/teresarg">
          <FontAwesomeIcon icon={faGithub} />
        </RoundButton>
        <RoundButton as="a" href="https://es.linkedin.com/in/teresaroga7">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </RoundButton>
      </LinksSection>
    </section>
    <section>
      <Picture />
    </section>
  </Wrapper>
);


const Wrapper = styled.section`
display: flex;
flex-direction: column;
flex-flow: column-reverse;

@media (min-width: 1200px) {
 flex: initial;
 flex-flow: initial;
}

img {
  border-radius: 50%;
  max-height: 61rem;
  padding-left: 10rem;
  background-color: transparent;
}
h1 {
  margin: 3rem 0;
}
`;

const Picture = styled.section`
margin: 5rem auto 0;
background-image: ${(props) => `url(${props.theme.image})`};
:hover {
  background-image: ${(props) => `url(${props.theme.image2})`};
}
cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✨</text></svg>") 16 0, auto;
background-size: cover;
background-position: center;
border-radius: 48% 70% 42% 63%;
height: 30rem;
width: 30rem;
background-color: transparent;

@media (min-width: 768px) {
  height: 53rem;
  width: 58rem;
}
`;

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
    color: ${(props) => props.theme.secondary};
  }
`;

const LinksSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export default About;
