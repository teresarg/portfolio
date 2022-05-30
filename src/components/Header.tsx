import styled from "styled-components";
import { Toggle } from "components";
import { useState } from "react";

const HeaderWrapper = styled.header`
  background-color: #eeee;
  box-sizing: border-box;
  display: flex;
  height: 8rem;
  padding: 0 2rem 0 2rem;
  position: fixed;
  top: 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 3rem 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem 0 6rem;
  }
`;

const NameWrapper = styled.div`
  font-size: 1.7rem;
  margin: auto 0;
  font-weight: 500;
  color: #a882ce;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  margin: auto 0 auto auto;
`;

const Header = (): React.ReactElement => {
  const [isActive, setIsActive] = useState(false);
  return (
    <HeaderWrapper>
      <NameWrapper>
        Teresa <span role="img">👩‍💻 🦄 🌏 </span>
      </NameWrapper>
      <ToggleWrapper>
        Myself Blog
        <Toggle isActive={isActive} onToggle={() => setIsActive(!isActive)} />
      </ToggleWrapper>
    </HeaderWrapper>
  );
};

export { Header };
