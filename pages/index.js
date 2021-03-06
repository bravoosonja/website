import { useContext, useRef, useEffect } from "react";
// components
import CustomCursor from "../components/feature/CustomCursor";
import Banner from "../components/Banner";
import Layout from "../components/layouts/Layout";
// pages
import About from "./about";
import Projects from "./projects/index";
// context
import CursorContextProvider, {
  CursorContext,
} from "../context/cursor-context";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home({ allProjectsData }) {
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
        <Projects />
      </section>
    </CursorContextProvider>
  );
}

Home.getLayout = function getLayout(Home) {
  return <Layout>{Home}</Layout>;
};
