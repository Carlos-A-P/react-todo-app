import React from "react";
import "../styles/Filters.css";

export default function Filters() {
	return (
		<div className="filters">
			<button>All</button>
			<button>Active</button>
			<button>Completed</button>
		</div>
	);
}
