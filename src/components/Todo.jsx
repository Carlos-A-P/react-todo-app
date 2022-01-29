import React from "react";
import "../styles/Todo.css";

function Todo({ todos, completeTodo, removeTodo }) {
	return todos.map((todo) => (
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
