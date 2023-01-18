import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../hooks/eventHooks";
import { useRouter } from "next/router";

const eventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const findEventsHandler = (
		year: string | undefined,
		month: string | undefined
	) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<Fragment>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
};

export default eventsPage;
