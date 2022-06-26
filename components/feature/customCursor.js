import { useRef, useEffect } from "react";
import styled from "styled-components";

const CustomCursor = (props) => {
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = clientX - 75;
    const y = clientY - 75;
    cursor.current.style.left = `${x}px`;
    cursor.current.style.top = `${y}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor ref={cursor} />
    </>
  );
};

const Cursor = styled.div`
  background-color: ${(props) => props.theme.accent};
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
    cubic-bezier(0.75, -1.27, 0.3, 2.33);
  z-index: 1;
  opacity: 70%;
  mix-blend-mode: difference;

  /* &.hovered {
    content: "See More";
    font-family: "Murmure";
    font-size: 1rem;
    transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
      cubic-bezier(0.75, -1.27, 0.3, 2.33);
  } */
`;

export default CustomCursor;
