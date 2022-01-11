import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
	const [input, setInput] = useState("");

	// set focus to input after clicking submit button
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	// update input as user types
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		// set input to whatever we type in
		e.preventDefault();

		// add random id and set input field and send back to prop
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		// clear input field after submit
		setInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="add todo"
				value={input}
				onChange={handleChange}
				name="text"
				ref={inputRef}
			/>
			<button onClick={handleSubmit}>Add todo</button>
		</form>
	);
}

export default TodoForm;
