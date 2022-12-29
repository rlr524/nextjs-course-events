import styles from "./styles/event-content.module.css";

type Props = {
	children?: JSX.Element | JSX.Element[];
};

const EventContent = ({ children }: Props) => {
	return <section className={styles.content}>{children}</section>;
};

export default EventContent;
