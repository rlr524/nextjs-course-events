import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/events/EventContent";
import EventDetail from "../../components/events/EventDetail";
import EventSummary from "../../components/events/EventSummary";
import { getEventById } from "../../hooks/eventHooks";

const eventDetailPage = () => {
	const router = useRouter();
	const id = router.query.id;
	const event = getEventById(id);

	// TODO: Determine why this is running even when an event is found
	if (!event) {
		console.log("No event found with the given id");
		return <p>No event found with the given id</p>;
	}
	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventDetail
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.alt}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
};

export default eventDetailPage;
