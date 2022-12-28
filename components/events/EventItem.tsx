import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import AppButton from "../ui/AppButton";
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
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<AppButton link={exploreLink}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
					</AppButton>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
