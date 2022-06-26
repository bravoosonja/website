import React from "react";
import styled from "styled-components";
// components
import MenuButton from "./menuButton";
import MenuContent from "./menuContent";

export default function Menu() {
  return (
    <Wrapper>
      <MenuButton />
      <MenuContent />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
