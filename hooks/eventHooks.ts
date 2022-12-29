import events from "../data/dummy-data";

export function getFeaturedEvents() {
	return events.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return events;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
	const { year, month } = dateFilter;

	const filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export function getEventById(id: string | string[] | undefined) {
	return events.find((event) => event.id === id);
}
