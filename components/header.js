import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

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
  height: 1vh;
  color: ${(props) => props.theme.text};
`;

const InnerHeader = styled.div`
  z-index: 10;
  height: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled.div`
  width: 30%;
  a {
    font-weight: 700;
    font-size: 1.3rem;
    color: ${(props) => props.theme.text};
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
  width: 30%;
`;
