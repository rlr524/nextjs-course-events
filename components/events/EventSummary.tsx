import styles from "./styles/event-summary.module.css";

type Props = {
	title: string;
};

function EventSummary({ title }: Props) {
	return (
		<section className={styles.summary}>
			<h1>{title}</h1>
		</section>
	);
}

export default EventSummary;
