import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - 20, y: clientY - 20 });
      //   const x = clientX / width;
      //   const y = clientY / height;
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
}
