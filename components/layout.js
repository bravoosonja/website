import { useContext } from "react";
// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
// components
import Header from "./header";
import CustomCursor from "./feature/customCursor";
import Cookie from "./UI/cookie";
// hooks
import useLayoutFetch from "../hooks/useLayoutFetch";

export default function Layout({ children }) {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const { showCookie, setShowCookie } = useLayoutFetch();

  return (
    <CursorContextProvider>
      <nav>
        {/* <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}
        <Header cursorChangeHandler={cursorChangeHandler("cursor")} />
        {/* <Theme theme={theme} toggleTheme={toggleTheme} /> */}
      </nav>
      <main>{children}</main>
      {showCookie && <Cookie setShowCookie={setShowCookie} />}
    </CursorContextProvider>
  );
}
