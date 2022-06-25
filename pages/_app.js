import Layout from "../components/layout";
import GlobalStyle from "../styles/globalStyle";
import CustomCursor from "../components/feature/customCursor";
import "../styles/fonts.css";
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";

function MyApp({ Component, pageProps }) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
