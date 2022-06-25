import { createContext, useReducer } from "react";

export const themes = {
  dark: {
    background: "#0A0A0A",
    text: "#F5F5F5",
  },
  light: {
    background: "#0A0A0A",
    text: "#F5F5F5",
  },
};

export const ThemeContext = createContext();
export const CursorContext = createContext();
//const GlobalDispatchContext = createContext();

function init(initialStates) {
  return { currentTheme: themes.light, cursorStyles: cursorStyles.pointer };
}
//Reducer
export function globalReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        currentTheme: action.theme,
      };

    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorStyles: action.cursorType,
      };
    }
    case "reset":
      return init(action.payload);
    default: {
      throw new Error("Unhandled action type: ${action.type}");
    }
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: "light",
    cursorStyles: ["pointer", "hovered"],
  });
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>
      <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
    </ThemeContext.Provider>
  );
}
// export const globalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, {
//     currentTheme:
//       window.localStorage.getItem("theme") == null
//         ? "light"
//         : window.localStorage.getItem("theme"),
//     cursorType: false,
//     cursorStyles: ["pointer", "hovered"],
//   });

//   return (
//     <GlobalDispatchContextProvider value={dispatch}>
//       <GlobalStateContextProvider value={state}>
//         {children}
//       </GlobalStateContextProvider>
//     </GlobalDispatchContextProvider>
//   );
// };

// //custom hooks to use dispatch and state
// export const useGlobalStateContext = () => useContext(GlobalStateContext);
// export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
