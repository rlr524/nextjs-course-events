import { Fragment } from "react";
import MainHeader from "./MainHeader";

type Props = {
	children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
	return (
		<Fragment>
			<MainHeader />
			<main>{children}</main>
		</Fragment>
	);
};

export default AppLayout;
