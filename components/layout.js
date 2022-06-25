import { useState, useReducer } from "react";
// components
import Header from "../components/header";
import CustomCursor from "./feature/customCursor";
//context
import {
  CursorContext,
  cursorStyles,
  ThemeContext,
  themes,
} from "../context/globalContext";
import { GlobalStyle } from "styled-components";

export default function Layout({ children }) {
  // const { currentTheme, cursorType } = useGlobalStateContext();
  // const dispatch = useGlobalDispatchContext();

  const [toggleMenu, setToggleMenu] = useState(false);
  // const [state, dispatch] = useReducer(reducer, initialStates, init);

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <>
      <CustomCursor toggleMenu={toggleMenu} />
      <Header onCursor={onCursor} toggleMenu={toggleMenu} />
      <main>{children}</main>
    </>
  );
}
