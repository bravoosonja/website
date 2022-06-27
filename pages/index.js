import { useState, useContext } from "react";
import Head from "next/head";
// components
import Header from "../components/header";
import Menu from "../components/menu";
import CustomCursor from "../components/feature/customCursor";
// context
import { CursorContext } from "../context/cursor-context";

export default function () {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  return (
    <>
      <Head>
        <title
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          Portfolio
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor cursorType={cursorType} />
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Header setToggleMenu={setToggleMenu} />
      <div>
        <h1>AESTHETICS</h1>
        <h2>H2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from
      </p>
    </>
  );
}
