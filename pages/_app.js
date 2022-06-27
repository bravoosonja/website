import { useState } from "react";
// styles
import { lightTheme, darkTheme, GlobalStyle } from "../styles/globalStyle";
import "../styles/fonts.css";
import styled, { ThemeProvider } from "styled-components";
// icons
import { GiMoonBats, GiSun } from "react-icons/gi";
// context provider
import CursorContextProvider from "../context/cursor-context";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <CursorContextProvider>
        <GlobalStyle />
        <ThemeContainer onClick={toggleTheme}>
          {theme === "light" ? <GiMoonBats /> : <GiSun />}
        </ThemeContainer>
        <Component {...pageProps} />
      </CursorContextProvider>
    </ThemeProvider>
  );
}

const ThemeContainer = styled.div`
  font-style: italic;
  font-size: 1.7rem;
  padding: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 0.7rem 0;
  width: full;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.primary};
  }
`;

export default MyApp;
