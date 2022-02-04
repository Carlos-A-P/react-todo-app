import React from "react";
import "../styles/TodoHeader.css";

export default function TodoHeader({ pageTheme }) {
	return (
		<div className="header">
			<h1>Todo</h1>
			<button onClick={() => pageTheme()}></button>
		</div>
	);
}
