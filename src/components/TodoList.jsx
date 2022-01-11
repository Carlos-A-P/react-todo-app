import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
	// list of Todos
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		// if there's alot of empty space this code will join the empty space
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		// add new todo to the end of existing todos array
		const newTodos = [todo, ...todos];

		// update State, adding object to array
		setTodos(newTodos);

		console.log(todos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			{/* pass function as a prop */}
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
		</div>
	);
}

export default TodoList;
