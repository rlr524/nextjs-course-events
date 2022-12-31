import styles from "./styles/event-search.module.css";
import AppButton from "../ui/AppButton";

const EventSearch = (props: any) => {
	return (
		<form className={styles.form}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="year">Year</label>
					<select id="year">
						<option>2021</option>
						<option>2022</option>
						<option>2023</option>
					</select>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="month">Month</label>
					<select id="month">
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
