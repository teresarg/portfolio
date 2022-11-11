import { Link, Toggle } from "components";
import { useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import Themes from "themes";

const HeaderWrapper = styled.header`
  border-radius: 19% 54%;
  background-color: rgba(255, 255, 255, 0.03);
  margin-top: 2rem;
  box-sizing: border-box;
  display: flex;
  height: 8rem;
  padding: 0 2rem 0 2rem;
  position: fixed;
  top: 0;
  width: 19rem;
  right: 2rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);

  @media (min-width: 768px) {
    width: 26rem;
    padding: 0 3rem 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem 0 6rem;
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
