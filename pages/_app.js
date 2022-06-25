import Layout from "../components/layout";
import GlobalStyle from "../styles/globalStyle";
import CustomCursor from "../components/feature/customCursor";
import "../styles/fonts.css";
//Context
import { GlobalProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
