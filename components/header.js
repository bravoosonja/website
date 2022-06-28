import Link from "next/link";
import styled from "styled-components";

export default function Header({ props }) {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link href="/">
            <a>My Name</a>
          </Link>
        </Logo>
        <Wrapper>
          <NavItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </NavItem>
        </Wrapper>
        {/* <NavItem>
          <Theme onClick={toggleTheme} theme={theme} />
        </NavItem> */}
      </Nav>
      {/* <InnerHeader>
        <Logo>
          <Link href="/">
            <a>My Name</a>
          </Link>
        </Logo>
        <StyledButton onClick={() => setToggleMenu(true)}>Menu</StyledButton>
      </InnerHeader> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-left: 50%;
  position: fixed;
  top: 1rem;
  left: 68vw;
  margin: auto;
`;

const NavItem = styled.button`
  background: ${(props) => props.theme.blur};
  backdrop-filter: blur(2em);
  padding: 1rem;
  border-radius: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-left: 2em;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
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

// mobile menu ?
const InnerHeader = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  position: sticky;
  background: ${(props) => props.theme.blur};
  backdrop-filter: blur(2em);
  position: fixed;
  top: 1vh;
  padding: 0.5rem;
`;

const StyledButton = styled.div`
  border: none;
  background: none;
  outline: none;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
