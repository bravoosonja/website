import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
// components
import Menu from "./menu";

export default function Header({ setToggleMenu }) {
  return (
    <Container>
      <Wrapper>
        <InnerHeader>
          <Logo>
            <Link href="/">
              <a>My Name</a>
            </Link>
          </Logo>
          <StyledMenu>
            <StyledButton onClick={() => setToggleMenu(true)}>
              Menu
            </StyledButton>
          </StyledMenu>
        </InnerHeader>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 100%;
  /* padding: 0 auto; */
  height: 100px;
  color: ${(props) => props.theme.text};
`;

const Wrapper = styled.div`
  /* padding: 0 48px; */
`;

const InnerHeader = styled.div`
  position: relative;
  z-index: 10;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  a {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }
`;

const StyledMenu = styled.div``;

const StyledButton = styled.div`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};
`;

// const Wrapper = styled.div`
//   font-family: "Mier";
//   font-size: 5rems;
//   font-weight: bolder;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   background-color: transparent;
// `;

// const Name = styled.div`
//   background-color: transparent;
//   color: ${(props) => props.theme.text};
//   font-size: 1.3rem;
// `;

// const StyledMenu = styled.div`
//   background-color: transparent;
//   font-size: 1.7rem;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   color: ${(props) => props.theme.text};
// `;
