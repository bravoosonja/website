import GlobalStyle from "../styles/globalStyle";
import "../styles/fonts.css";
// context
import MouseContextProvider from "../contexts/mouse-context";

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
