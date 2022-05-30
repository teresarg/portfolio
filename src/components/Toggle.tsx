import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  background: #161618;
  border-radius: 2.5rem;
  border: 0.1rem solid #666;
  cursor: pointer;
  display: flex;
  height: 2.5rem;å
  margin: auto;
  min-width: 5rem;
  position: relative;
  width: 5rem;

  span {
    position: absolute;
  }
`;

// Learning: cómo pasa una prop
const Notch = styled.div<{ isActive: boolean }>`
  background: white;
  border-radius: 50%;
  border: 0.1rem solid #666;
  height: 2.1rem;
  margin-top: 0.1rem;
  transform: translate(${(props) => (props.isActive ? "2.6rem" : "0.1rem")});
  transition: transform 0.1s linear;
  width: 2.1rem;
`;

const ThemeModeIconDark = styled.div`
  align-items: center;
  color: white;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0.5rem;
  img {
    height: 1.7rem;
    width: 1.7rem;
  }
`;

// Learning: cómo extender un styled component
const ThemeModeIconLight = styled(ThemeModeIconDark)`
  left: 0.5rem;
`;

const Toggle = ({
  isActive,
  onToggle,
}: {
  isActive: boolean;
  onToggle: () => void;
}): React.ReactElement => (
  <ToggleWrapper onClick={onToggle}>
    <ThemeModeIconDark>
      <img src="./moon.svg" />
    </ThemeModeIconDark>
    <ThemeModeIconLight>
      <img src="./sun.svg" />
    </ThemeModeIconLight>
    <Notch isActive={isActive} />
  </ToggleWrapper>
);

export { Toggle };