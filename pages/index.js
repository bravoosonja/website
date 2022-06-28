import { useContext } from "react";
// components
import About from "../pages/about";
import Skills from "../pages/skills";
// context
import { CursorContext } from "../context/cursor-context";

export default function Home() {
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  return (
    <>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
    </>
  );
}
