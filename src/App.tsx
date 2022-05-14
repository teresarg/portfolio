import { Header, PageLayout } from "components";
import About from "pages/About";
import Blog from "pages/Blog";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Themes from "themes";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; /*  62.5% of 16px is 10px -> 1rem = 10px */
    font-family: 'acumin-pro';
  }
  body{
    min-height: 100vh;
    margin: 0;
    font-family: 'acumin-pro';
    font-size: 1.6rem; /* This means base font-size is 16px */
  }
`;

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme == "light" ? Themes.Light : Themes.Dark}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <PageLayout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
