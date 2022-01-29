import React from "react";
import "../styles/TodosBar.css";

export default function TodosBar({ numItems, clearAll }) {
	return (
		<div className="todo-footer">
			<p tabIndex="0" className="task-count">
				{numItems} items left
			</p>
			<button onClick={() => clearAll([])}>Clear Completed</button>
		</div>
	);
}
