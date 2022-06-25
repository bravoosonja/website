import { useState } from "react";
// components
import Header from "../components/header";
import CustomCursor from "./feature/customCursor";
//context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import { GlobalStyle, ThemeProvider } from "styled-components";

export default function Layout({ children }) {
  const darkTheme = {
    background: "#0A0A0A",
    text: "#F5F5F5",
  };

  const lightTheme = {
    background: "#0A0A0A",
    text: "#F5F5F5",
  };

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const [toggleMenu, setToggleMenu] = useState(false);

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <ThemeProvider theme={currentTheme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header onCursor={onCursor} toggleMenu={toggleMenu} />
      <main>{children}</main>
    </ThemeProvider>
  );
}
