import { useState, useContext } from "react";
// styles
//import { lightTheme, darkTheme, GlobalStyle } from "../styles/globalStyle";
import "../styles/globals.scss";
//import styled, { ThemeProvider } from "styled-components";
// icons
import { GiMoonBats, GiSun } from "react-icons/gi";
// context
//import { ThemeContext } from "styled-components";
import CursorContextProvider from "../context/cursor-context";
// components
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   theme == "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <AnimatePresence exitBeforeEnter>
      {/* <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}> */}
      <CursorContextProvider>
        {/* <ThemeContainer onClick={toggleTheme}>
            {theme === "light" ? <GiMoonBats /> : <GiSun />}
            <GlobalStyle />
          </ThemeContainer> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CursorContextProvider>
      {/* </ThemeProvider> */}
    </AnimatePresence>
  );
}

const ThemeContainer = styled.div`
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 1rem 0;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.accent};
  }
`;

export default MyApp;
