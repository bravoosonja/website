import { useContext, useState, useEffect } from "react";
// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
// components
import Menu from "./Menu";
import CustomCursor from "./feature/CustomCursor";
import Contact from "../pages/Contact";

export default function Layout({ children }) {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  return (
    <>
      <nav>
        {/* <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}

        <Menu />
      </nav>
      <main>{children}</main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
