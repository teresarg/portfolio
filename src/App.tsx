import { Header, PageLayout } from "components";
import About from "pages/About";
import Blog from "pages/Blog";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageLayout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
