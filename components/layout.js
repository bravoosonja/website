import { useState, useContext } from "react";
// context
import { CursorContext } from "../context/cursor-context";
import { ThemeContext } from "../context/theme-context";
// components
import Header from "./header";
import Menu from "./menu";
import CustomCursor from "./feature/customCursor";
import Cookie from "./UI/cookie";
import Theme from "../components/feature/theme";
// hooks
import useLayoutFetch from "../hooks/useLayoutFetch";

export default function Layout({ children }) {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const { showCookie, setShowCookie } = useLayoutFetch();

  return (
    <>
      <CustomCursor
        cursorType={cursorType}
        cursorChangeHandler={cursorChangeHandler}
      />
      <nav>
        {/* <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}
        <Header />
        {/* <Theme theme={theme} toggleTheme={toggleTheme} /> */}
      </nav>
      <main>{children}</main>
      {showCookie && <Cookie setShowCookie={setShowCookie} />}
    </>
  );
}
