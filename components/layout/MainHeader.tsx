import Link from "next/link";
import styles from "./styles/main-header.module.css";

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href={"/"}>NextEvents</Link>
			</div>
			<nav className={styles.navigation}>
				<li>
					<Link href={"/events"}>Browse All Events</Link>
				</li>
			</nav>
		</header>
	);
};

export default MainHeader;
