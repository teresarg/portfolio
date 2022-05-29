import { Header } from "components";
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
    </>
  );
}

export default App;
