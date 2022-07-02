import { useContext } from "react";
// components
import CustomCursor from "../components/feature/CustomCursor";
import Banner from "../components/Banner";
// pages
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// context
import { CursorContext } from "../context/cursor-context";

export default function Home() {
  // custom cursor
  //const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  return (
    <>
      {/* <CustomCursor /> */}
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
