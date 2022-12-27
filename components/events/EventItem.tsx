import Link from "next/link";
import styles from "./event-item.module.css";

const EventItem = (props: {
	id: string;
	title: string;
	image: string;
	alt: string;
	date: string;
	location: string;
}) => {
	const { id, title, image, alt, date, location } = props;

	const humanReadableDate = new Date(date).toLocaleDateString();
	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `/events/${id}`;

	return (
		<li className={styles.item}>
			<img src={"/" + image} alt={alt}></img>
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Link href={exploreLink}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
