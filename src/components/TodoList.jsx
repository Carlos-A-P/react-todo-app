import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Filters from "./Filters";
import TodosBar from "./TodosBar";
import "../styles/TodoList.css";

function TodoList() {
	// list of Todos
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("All");
	const [activeTodos, setActiveTodos] = useState([]);
	const [completed, setCompleted] = useState([]);

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

	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<div>
			<TodoForm onSubmit={addTodo} />
			<div className="todos-wrap">
				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
				/>
				<TodosBar numItems={todos.length} clearAll={clearTodos} />
			</div>
			<Filters />
		</div>
	);
}

export default TodoList;
