import { useContext, useRef, useEffect } from "react";
// components
import CustomCursor from "../components/feature/CustomCursor";
import Banner from "../components/Banner";
// pages
import About from "./About";
import Projects from "./projects/index";
import Contact from "./Contact";
// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home({ data: { projectItems } }) {
  // custom cursor
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  //gsap.registerPlugin(ScrollTrigger);

  return (
    <CursorContextProvider>
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects projectItems={projectItems} />
      </section>
    </CursorContextProvider>
  );
}
