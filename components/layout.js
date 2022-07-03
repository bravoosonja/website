import { useContext, useState, useRef } from "react";
// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
// components
import Menu from "./Menu";
import Cookie from "./UI/Cookie";
import CustomCursor from "./feature/CustomCursor";

export default function Layout({ children }) {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  // exit animation for cookie disclaimer
  const { cookieActive, setCookieActive } = useState(true);

  return (
    <CursorContextProvider>
      <nav>
        {/* <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}
        <Menu cursorChangeHandler={cursorChangeHandler("cursor")} />
        {/* <Theme theme={theme} toggleTheme={toggleTheme} /> */}
      </nav>
      {children}
      <footer>
        {cookieActive && (
          <Cookie
            cookieActive={cookieActive}
            setCookieActive={setCookieActive}
          />
        )}
      </footer>
    </CursorContextProvider>
  );
}
