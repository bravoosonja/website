import { useContext } from "react";
import styled from "styled-components";
// context
import MenuContext from "../../context/menu-context";

export default function MenuContent() {
  const { toggleMenu, setToggleMenu } = useContext(MenuContext);
  return (
    <>
      {toggleMenu && (
        <Wrapper>
          <InnerMenu>
            <NavContainer>
              <InternalNavLinks>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </InternalNavLinks>
            </NavContainer>
          </InnerMenu>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  //check later
  margin-right: 75px;
  padding-right: 50px;
  border-left: 1px solid ${(props) => props.theme.text};
  width: calc(100vw-126px);
  color: ${(props) => props.theme.text};
`;

const InnerMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  z-index: 10;
  color: ${(props) => props.theme.text};
  will-change: transform;
  transition: transform 1s cubic-bezier(1, 0, 0, 1);
  transform: translateX(-100%);
`;

const NavContainer = styled.div``;

const InternalNavLinks = styled.ul``;
