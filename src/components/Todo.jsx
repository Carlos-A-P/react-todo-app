import React from "react";
import "../styles/Todo.css";

function Todo({ todos, completeTodo, removeTodo, display }) {
	return todos
		.filter((todo) => {
			if (display === "All") {
				return todo;
			} else if (display === "Active") {
				return todo.isComplete === false;
			} else if (display === "Completed") {
				return todo.isComplete === true;
			}
		})
		.map((todo) => (
			// add complete class when click and add new object value
			<div
				tabIndex="0"
				className={todo.isComplete ? "todo complete" : "todo"}
				key={todo.id}
			>
				<input
					tabIndex="0"
					type="checkbox"
					id={todo.id}
					onChange={() => completeTodo(todo.id)}
				/>
				<div className="checkbox-wrap">
					<span className="custom-checkbox"></span>
				</div>
				<label htmlFor={todo.id}>
					<p tabIndex="0">{todo.text}</p>
				</label>
				<button
					className="delete-task"
					onClick={() => removeTodo(todo.id)}
				></button>
			</div>
		));
}

export default Todo;
