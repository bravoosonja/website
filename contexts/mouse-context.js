import { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContextProvider>
      value=
      {{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
      {props.children}
    </MouseContextProvider>
  );
};

export default MouseContextProvider;
