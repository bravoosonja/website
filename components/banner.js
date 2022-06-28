import { GiLed } from "react-icons/gi";
import styled from "styled-components";
import ScrollDown from "./UI/scrollDown";
import { IconContext } from "react-icons/lib";

export default function Banner() {
  return (
    <Wrapper>
      <Content>
        <h1>
          Always pulling hair, resisting the urge to break my laptop to create
          <span> aesthetic</span>, <span> fun </span> user experiences.
        </h1>
        <IconContext.Provider value={{ color: "#ff6201" }}>
          <Arrow>
            <ScrollDown /> Scroll down
          </Arrow>
        </IconContext.Provider>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
`;

const Content = styled.div`
  padding: 1rem 3rem;
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 10rem;
    line-height: 1.5;
  }
  span {
    color: ${(props) => props.theme.text};
  }
`;

const Arrow = styled.button`
  font-size: 1rem;
  position: relative;
  top: 40vh;
  right: 25vw;
  transform: rotate(45deg) scale(3.6);
  z-index: 50;
  margin: auto;
  background: transparent;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
