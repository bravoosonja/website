import { useContext } from "react";
import { motion } from "framer-motion";
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
        <Banner
          as={motion.div}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        />
      </section>
      <section>{/* <About /> */}</section>
      <section>
        <Skills />
      </section>
    </>
  );
}
