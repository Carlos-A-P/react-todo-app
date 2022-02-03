import React, { useState } from "react";
import "../styles/Todo.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Todo({ todos, completeTodo, removeTodo, display, handleChange }) {
	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const items = Array.from(todos);
		// splice from original index
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		handleChange(items);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="todos">
				{(provided) => (
					<ul {...provided.droppableProps} ref={provided.innerRef}>
						{todos
							.filter((todo) => {
								if (display === "All") {
									return todo;
								} else if (display === "Active") {
									return todo.isComplete === false;
								} else if (display === "Completed") {
									return todo.isComplete === true;
								}
								return todo;
							})
							.map((todo, index) => {
								return (
									<Draggable key={todo.id} draggableId={todo.id} index={index}>
										{(provided) => (
											<li
												tabIndex="0"
												className={todo.isComplete ? "todo complete" : "todo"}
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
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
											</li>
										)}
									</Draggable>
								);
							})}
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default Todo;
