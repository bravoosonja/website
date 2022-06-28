import { useContext } from "react";
// components
import About from "../pages/about";
import Skills from "../pages/skills";
import Banner from "../components/banner";
// context
import { CursorContext } from "../context/cursor-context";

export default function Home() {
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>{/* <About /> */}</section>
      <section>
        <Skills />
      </section>
    </>
  );
}
