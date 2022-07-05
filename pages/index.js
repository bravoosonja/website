import { useContext, useRef, useEffect } from "react";
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
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  // custom cursor
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  //gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <CustomCursor />
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
        <Projects
          onMouseEnter={() => cursorChangeHandler("seeMore")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
