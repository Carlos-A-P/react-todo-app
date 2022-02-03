import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Filters from "./Filters";
import TodosBar from "./TodosBar";
import "../styles/TodoList.css";

function TodoList() {
	// list of Todos
	const [todos, setTodos] = useState([
		{
			id: String(Math.floor(Math.random() * 10000)),
			text: "Complete this challenge",
			isComplete: false,
		},
		{
			id: String(Math.floor(Math.random() * 10000)),
			text: "Take over the world",
			isComplete: false,
		},
	]);
	const [filter, setFilter] = useState("All");

	const addTodo = (todo) => {
		// if there's alot of empty space this code will join the empty space
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		// add new todo to the end of existing todos array
		const newTodos = [...todos, todo];
		console.log(todos);

		// update State, adding object to array
		setTodos(newTodos);
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

	const removeCompleted = () => {
		let updatedTodos = todos.filter((todo) => {
			return todo.isComplete === false;
		});
		setTodos(updatedTodos);
	};

	const displayTodos = (setting) => {
		setFilter(setting);
		console.log(filter, setting);
	};

	const reorderList = (list) => {
		setTodos(list);
	};

	return (
		<div>
			<TodoForm onSubmit={addTodo} />
			<div className="todos-wrap">
				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					display={filter}
					handleChange={reorderList}
				/>
				<TodosBar numItems={todos.length} clearCompleted={removeCompleted} />
			</div>
			<Filters display={filter} todosFilter={displayTodos} />
		</div>
	);
}

export default TodoList;
