import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../hooks/eventHooks";
import EventContent from "../../components/events/EventContent";
import EventDetail from "../../components/events/EventDetail";
import EventSummary from "../../components/events/EventSummary";
import AppButton from "../../components/ui/AppButton";
import AppErrorAlert from "../../components/ui/AppErrorAlert";

const eventDetailPage = () => {
	const router = useRouter();
	const id = router.query.id;
	const event = getEventById(id);

	if (!event) {
		console.log("No event found with the given id");
		return (
			<Fragment>
				<AppErrorAlert>
					<p>No event found with the given id</p>
				</AppErrorAlert>
				<div className="center">
					<AppButton link="/events">
						<span>Show all events</span>
					</AppButton>
				</div>
			</Fragment>
		);
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
