import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
// components
import Menu from "./menu";

export default function Header({ setToggleMenu }) {
  return (
    <Container>
      <InnerHeader>
        <Logo>
          <Link href="/">
            <a>My Name</a>
          </Link>
        </Logo>
        <StyledMenu>
          <StyledButton onClick={() => setToggleMenu(true)}>Menu</StyledButton>
        </StyledMenu>
      </InnerHeader>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InnerHeader = styled.div`
  position: flex;
  z-index: 10;
  height: 100px;
`;

const Logo = styled.div`
  a {
    font-weight: 700;
    font-size: 1.3rem;
    color: ${(props) => props.theme.text};
    display: inline-block;
  }
`;

const StyledMenu = styled.div``;

const StyledButton = styled.div`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
  display: block;
`;
