import { useContext, useState } from "react";

// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
// components
import Menu from "./menu";
import Cookie from "./UI/cookie";
import CustomCursor from "./feature/customCursor";

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
      <main>{children}</main>
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
