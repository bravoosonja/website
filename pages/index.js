import { useContext } from "react";
// components
import CustomCursor from "../components/feature/customCursor";
import Banner from "../components/banner";
// pages
import About from "../pages/about";
import Skills from "../pages/skills";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
// context
import { CursorContext } from "../context/cursor-context";

export default function Home() {
  // custom cursor
  //const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  return (
    <>
      {/* <CustomCursor /> */}
      <section>
        <Banner
          onMouseEnter={() => cursorChangeHandler("banner")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
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
