import { useContext, useRef } from "react";
//import LocomotiveScroll from "locomotive-scroll";
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

  // locomotive scroll
  // const ref = useRef();

  // useEffect(() => {
  //   if (ref) {
  //     new LocomotiveScroll({
  //       ref: current.ref,
  //       smooth: true,
  //       direction: "horizontal",
  //       multiplier: 0.5,
  //     });
  //   }
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <main data-scroll-container className="main-container">
      {/* <CustomCursor /> */}
      <section data-scroll-section>
        <Banner />
      </section>
      <section data-scroll-section>
        <About />
      </section>
      <section data-scroll-section>
        <Skills />
      </section>
      <section data-scroll-section data-scroll data-scroll-speed={-1}>
        <Projects />
      </section>
      <section data-scroll-section>
        <Contact />
      </section>
    </main>
  );
}
