import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from "./app-button.module.css";

type Props = {
	link?: string;
	children?: JSX.Element | JSX.Element[];
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * @param props
 * @returns An HTML button element with a link and title
 */
const AppButton = ({ link, children, onClick }: Props) => {
	if (link) {
		return (
			<button className={styles.btn}>
				<Link legacyBehavior href={link}>
					<a>{children}</a>
				</Link>
			</button>
		);
	}

	return (
		<button className={styles.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default AppButton;
