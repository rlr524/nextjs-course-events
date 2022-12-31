import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../hooks/eventHooks";

const eventsPage = () => {
	const events = getAllEvents();

	return (
		<Fragment>
			<EventSearch />
			<EventList items={events} />
		</Fragment>
	);
};

export default eventsPage;
