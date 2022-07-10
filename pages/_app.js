// styles
import "../styles/globals.scss";
// components
import Layout from "../components/layouts/Layout";
import CustomCursor from "../components/feature/CustomCursor";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
  // return (
  //   <>
  //     <CustomCursor />
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   </>
  // );
}

export default MyApp;
