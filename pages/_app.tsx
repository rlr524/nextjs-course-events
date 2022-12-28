import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * @param App components and all page props
 * @returns App components and all page props
 */
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
