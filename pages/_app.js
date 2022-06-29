import { AnimatePresence } from "framer-motion";
// styles
import "../styles/globals.scss";
import variables from "../styles/variables.module.scss";
// components
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
