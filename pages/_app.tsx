import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/layout/AppLayout";

/**
 * @param App components and all page props
 * @returns App components and all page props
 */
const App = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	);
};

export default App;
