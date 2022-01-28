import React from "react";
import "../styles/Todo.css";

function Todo({ todos, completeTodo, removeTodo }) {
	return todos.map((todo, index) => (
		// add complete class when click and add new object value
		<div className={todo.isComplete ? "todo complete" : "todo"} key={todo.id}>
			<div className="checkbox-wrap">
				<span className="custom-checkbox"></span>
			</div>
			<input
				type="checkbox"
				id={todo.id}
				onChange={() => completeTodo(todo.id)}
			/>
			<label htmlFor={todo.id}>
				<p>{todo.text}</p>
			</label>
			<button
				className="delete-task"
				onClick={() => removeTodo(todo.id)}
			></button>
		</div>
	));
}

export default Todo;
