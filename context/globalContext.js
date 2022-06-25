import { createContext, useReducer, useContext } from "react";

//define the context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error("Unhandled action type: ${action.type}");
    }
  }
};

export const globalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "light"
        : window.localStorage.getItem("theme"),
    cursorType: false,
    cursorStyles: ["pointer", "hovered"],
  });

  return (
    <GlobalDispatchContextProvider value={dispatch}>
      <GlobalStateContextProvider value={state}>
        {children}
      </GlobalStateContextProvider>
    </GlobalDispatchContextProvider>
  );
};

//custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
