import React from "react";
import "../styles/Filters.css";

export default function Filters({ display, todosFilter }) {
	return (
		<div className={`filters ${display}`}>
			<button
				className={display === "All" ? "selected" : ""}
				onClick={() => todosFilter("All")}
			>
				All
			</button>
			<button
				className={display === "Active" ? "selected" : ""}
				onClick={() => todosFilter("Active")}
			>
				Active
			</button>
			<button
				className={display === "Completed" ? "selected" : ""}
				onClick={() => todosFilter("Completed")}
			>
				Completed
			</button>
		</div>
	);
}
