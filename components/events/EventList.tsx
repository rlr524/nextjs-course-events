import EventItem from "./EventItem";

const EventList = (props: { items: [object] }) => {
	const { items } = props;

	return (
		<ul>
			{items.map((e) => (
				<li></li>
			))}
		</ul>
	);
};

export default EventList;
