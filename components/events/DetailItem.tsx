import styles from "./styles/detail-item.module.css";

type Props = {
	icon: React.FC;
	children: JSX.Element | JSX.Element[];
};

function DetailItem({ icon: Icon, children }: Props) {
	return (
		<li className={styles.item}>
			<span className={styles.icon}>
				<Icon />
			</span>
			<span className={styles.content}>{children}</span>
		</li>
	);
}

export default DetailItem;
