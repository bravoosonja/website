// styles
import "../styles/globals.scss";
// import variables from "../styles/variables.module.scss";
// components
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
