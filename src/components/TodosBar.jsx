import React from "react";
import "../styles/TodosBar.css";

export default function TodosBar() {
	return (
		<div className="todo-footer">
			<p className="task-count">0 items left</p>
			<button>Clear Completed</button>
		</div>
	);
}
