import { ReactNode } from "react";
import styles from "./app-error-alert.module.css";

type Props = {
	children: ReactNode;
};

const AppErrorAlert = ({ children }: Props) => {
	return <div className={styles.alert}>{children}</div>;
};

export default AppErrorAlert;
