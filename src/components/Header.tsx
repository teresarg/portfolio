import { Link, Toggle } from "components";
import { useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import Themes from "themes";

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.menuBg};
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
  color: ${props => props.theme.secondary};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  margin: auto 0 auto auto;
  cursor: pointer;
`;

const Header = ({
  toggleTheme,
}: {
  toggleTheme: () => void;
}): React.ReactElement => {
  const { pathname } = useLocation();
  const theme = useTheme();
  return (
    <HeaderWrapper>
      <NameWrapper>
        Teresa <span role="img">👩‍💻 🦄 🌏 </span>
      </NameWrapper>
      <ToggleWrapper>
        <Link to="/" isActive={pathname === "/"}>
          Myself
        </Link>
        <Link to="/blog" isActive={pathname === "/blog"}>
          Blog
        </Link>
        <Toggle isActive={theme === Themes.Dark} onToggle={toggleTheme} />
      </ToggleWrapper>
    </HeaderWrapper>
  );
};

export { Header };
