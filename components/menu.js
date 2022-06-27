import Link from "next/dist/client/link";
import styled from "styled-components";
// icon
import { CgClose } from "react-icons/cg";
// components
import CustomCursor from "./feature/customCursor";

export default function Menu({ toggleMenu, setToggleMenu }) {
  return (
    <>
      {toggleMenu && (
        <>
          <CustomCursor />
          <StyledMenu>
            <Wrapper>
              <MenuLinks>
                <CloseIconContainer>
                  <CgClose onClick={() => setToggleMenu(!toggleMenu)} />
                </CloseIconContainer>
                <nav>
                  <ul>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/skills">
                        <a>Skills</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        <a>Projects</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Info>
                  <h3>Info</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    dapibus ultricies velit sed consectetur. Sed sapien ex,
                    tempor tempor sagittis pharetra, auctor vitae urna. Donec
                    congue lorem ac magna cursus vehicula. Nulla quis justo nec
                    orci vehicula venenatis. Phasellus gravida consequat
                    pretium. Cras ut sodales risus. In vitae ultricies ex.
                  </p>
                </Info>
              </MenuLinks>
            </Wrapper>
          </StyledMenu>
        </>
      )}
    </>
  );
}

const StyledMenu = styled.div`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme.background};
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 8rem 5rem;
`;

const Wrapper = styled.div`
  position: relative;
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    font-size: 6rem;
    font-weight: 700;
    cursor: pointer;
    height: 15vh;
    overflow: hidden;
    position: relative;
    width: 30vw;
  }

  a {
    position: absolute;
    color: ${(props) => props.theme.text};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }
`;

const Info = styled.div`
  color: ${(props) => props.theme.text};
  width: 30vw;

  h3 {
    font-family: "Murmure";
  }

  p {
    margin: 0 auto;
  }
`;

const CloseIconContainer = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  position: relative;
  padding: 1rem;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
