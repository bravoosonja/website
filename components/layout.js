import { useState, useContext } from "react";
// context
import { CursorContext } from "../context/cursor-context";
// components
import Header from "./header";
import Menu from "./menu";
import CustomCursor from "./feature/customCursor";

export default function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  return (
    <>
      <CustomCursor
        cursorType={cursorType}
        cursorChangeHandler={cursorChangeHandler}
      />
      <nav>
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Header setToggleMenu={setToggleMenu} />
      </nav>
      <main>{children}</main>
    </>
  );
}
