import { useRef } from "react";
import styles from "./styles/event-search.module.css";
import AppButton from "../ui/AppButton";

type Props = {
	onSearch: (
		selectedYear: string | undefined,
		selectedMonth: string | undefined
	) => void;
};

const EventSearch = ({ onSearch }: Props) => {
	const yearInputRef = useRef<HTMLSelectElement>(null);
	const monthInputRef = useRef<HTMLSelectElement>(null);

	const submitHandler = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const selectedYear = yearInputRef.current?.value;
		const selectedMonth = monthInputRef.current?.value;

		onSearch(selectedYear, selectedMonth);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option>2021</option>
						<option>2022</option>
						<option>2023</option>
					</select>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInputRef}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>
			<AppButton>
				<span>Find Events</span>
			</AppButton>
		</form>
	);
};

export default EventSearch;
