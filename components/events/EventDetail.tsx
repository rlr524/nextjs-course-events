import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import DetailItem from "./DetailItem";
import styles from "./styles/event-detail.module.css";

type Props = {
	date: string;
	address: string;
	image: string;
	imageAlt: string;
};

const EventLogistics = ({ date, address, image, imageAlt }: Props) => {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = address.replace(", ", "\n");

	return (
		<section className={styles.logistics}>
			<div className={styles.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className={styles.list}>
				<DetailItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</DetailItem>
				<DetailItem icon={AddressIcon}>
					<address>{addressText}</address>
				</DetailItem>
			</ul>
		</section>
	);
};

export default EventLogistics;
