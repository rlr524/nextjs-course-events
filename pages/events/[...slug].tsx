import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";
import { getFilteredEvents } from "../../hooks/eventHooks";
import EventList from "../../components/events/EventList";
import EventResultsTitle from "../../components/events/EventResultsTitle";
import AppButton from "../../components/ui/AppButton";
import AppErrorAlert from "../../components/ui/AppErrorAlert";
// import { FadeLoader } from "react-spinners";

const filteredEventsPage = () => {
	const currentYear = new Date().getFullYear().toString();
	const currentMonth = new Date().getMonth().toString();
	const router = useRouter();
	const filterData = router.query.slug ?? [currentYear, currentMonth];

	if (!filterData) {
		<p>
			Loading <data className=""></data>
		</p>;
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = parseInt(filteredYear, 10);
	const numMonth = parseInt(filteredMonth, 10);

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2020 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		console.error("An invlaid filter was used");
		return (
			<Fragment>
				<AppErrorAlert>
					<p>
						Invalid filter. Please ensure adjust your values or{" "}
						<Link href={"/contact"}>contact us</Link>.
					</p>
				</AppErrorAlert>
				<div className="center">
					<AppButton link="/events">
						<span>Show all events</span>
					</AppButton>
				</div>
			</Fragment>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<AppErrorAlert>
					<p>No events found for the selected filter</p>
				</AppErrorAlert>
				<div className="center">
					<AppButton link="/events">
						<span>Show all events</span>
					</AppButton>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<Fragment>
			<EventResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</Fragment>
	);
};

export default filteredEventsPage;
