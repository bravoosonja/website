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
        <StyledButton onClick={() => setToggleMenu(true)}>Menu</StyledButton>
      </InnerHeader>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const InnerHeader = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  background: transparent;
`;

const Logo = styled.div`
  a {
    font-weight: 700;
    font-size: 1.3rem;
    color: ${(props) => props.theme.text};

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

const StyledButton = styled.div`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
