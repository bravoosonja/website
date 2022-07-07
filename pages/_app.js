// styles
import "../styles/globals.scss";
// components
import Layout from "../components/Layout";
import CustomCursor from "../components/feature/CustomCursor";
import CursorContextProvider from "../context/cursor-context";

function MyApp({ Component, pageProps }) {
  // use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
  // <>
  //   <CustomCursor />
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // </>
}

export default MyApp;
