import Link from "next/link";
import styles from "./app-button.module.css";

type Props = {
	link: string;
	children?: JSX.Element | JSX.Element[];
};

/**
 * @param props
 * @returns An HTML button element with a link and title
 */
const AppButton = ({ link, children }: Props) => {
	return (
		<button className={styles.btn}>
			<Link legacyBehavior href={link}>
				<a>{children}</a>
			</Link>
		</button>
	);
};

export default AppButton;
