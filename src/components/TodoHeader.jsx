import React from "react";
import "../styles/TodoHeader.css";

export default function TodoHeader() {
	return (
		<div className="header">
			<h1>Todo</h1>
			<button data-theme-changer onClick="toggleDark()"></button>
		</div>
	);
}
