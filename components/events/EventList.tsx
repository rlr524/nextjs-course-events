import EventItem from "./EventItem";
import styles from "./event-list.module.css";

/**
 * @param props
 * @returns An unordered list from an array of Events
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EventList = (props: { items: any }) => {
	const { items } = props;

	return (
		<ul className={styles.list}>
			{items.map(
				(e: {
					id: string;
					title: string;
					image: string;
					alt: string;
					date: string;
					location: string;
				}) => (
					<EventItem
						key={e.id}
						id={e.id}
						title={e.title}
						image={e.image}
						alt={e.alt}
						date={e.date}
						location={e.location}
					/>
				)
			)}
		</ul>
	);
};

export default EventList;
