import { useState } from "react";
// context
import MenuContext from "../../context/menu-context";
import styled from "styled-components";

export default function MenuManager(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
}

const Wrapper = styled.div``;
