import React from "react";

function Todo({ todos, completeTodo, removeTodo }) {
	return todos.map((todo, index) => (
		// add complete class when click and add new object value
		<div
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<button onClick={() => removeTodo(todo.id)}>Delete</button>
		</div>
	));
}

export default Todo;
