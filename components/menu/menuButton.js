import { useContext } from "react";
import styled from "styled-components";
// context
import MenuContext from "../../context/menu-context";

export default function MenuButton() {
  const { toggleMenu, setToggleMenu } = useContext(MenuContext);
  return (
    <Wrapper>
      <StyledMenuButton onClick={() => setToggleMenu(!toggleMenu)}>
        <span></span>
      </StyledMenuButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 11px;
  top: 100px;
  z-index: 11;
`;

const StyledMenuButton = styled.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border: none;
  background: 0 0;

  span {
    &:after,
    &:before {
      content: "";
      width: 2px;
      height: 48px;
      position: absolute;
      background-color: ${(props) => props.theme.text};
      left: 50%;
      top: 50%;
      display: block;
      will-change: transform;
      transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before {
      transform: translate(-5px, -50%) scale(0.7) rotate(180deg);
    }

    &:after {
      transform: translate(-5px, -50%) scale(0.7) rotate(0);
    }
  }
`;
