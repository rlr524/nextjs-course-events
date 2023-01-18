import Button from "../ui/AppButton";
import styles from "./styles/event-results-title.module.css";

type Props = {
	date: Date;
};

const EventResultsTitle = ({ date }: Props) => {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<section className={styles.title}>
			<h1>Events in {humanReadableDate}</h1>
			<Button link="/events">
				<span>Show all events</span>
			</Button>
		</section>
	);
};

export default EventResultsTitle;
