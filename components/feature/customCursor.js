import styled from "styled-components";
// hook
import useMousePosition from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  return (
    <>
      <Cursor style={{ left: `${x}px`, top: `${y}px` }} />
      <SeeMoreCursor style={{ left: `${x}px`, top: `${y}px` }} />
    </>
  );
}

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  /* border: 2px solid rgba(31, 30, 30, 0.808); */
  border-radius: 100%;
  mix-blend-mode: difference;
  background-color: white;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
`;

const SeeMoreCursor = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;

  :before {
    content: "";
  }

  :after {
    content: "See More";
    font-family: "Murmure";
    font-size: 12px;
    overflow-wrap: break-word;
  }
`;
