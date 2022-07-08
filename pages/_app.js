// styles
import "../styles/globals.scss";
// components
import Layout from "../components/Layout";
import CustomCursor from "../components/feature/CustomCursor";
import CursorContextProvider from "../context/cursor-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
