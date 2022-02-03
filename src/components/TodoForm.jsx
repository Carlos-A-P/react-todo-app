import React, { useState } from "react";
import "../styles/TodoForm.css";

function TodoForm(props) {
	const [input, setInput] = useState("");

	// set focus to input after clicking submit button
	// const inputRef = useRef(null);

	// useEffect(() => {
	// 	inputRef.current.focus();
	// });

	// update input as user types
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		// set input to whatever we type in
		e.preventDefault();

		// add random id and set input field and send back to prop
		props.onSubmit({
			id: String(Math.floor(Math.random() * 10000)),
			text: input,
			isComplete: false,
		});

		// clear input field after submit
		setInput("");
	};

	return (
		<div className="new-task-creator">
			<form onSubmit={handleSubmit}>
				<div className="submit-btn-wrap">
					<button type="submit"></button>
				</div>
				<input
					placeholder="Create a new todo..."
					className="new-task"
					value={input}
					onChange={handleChange}
					name="text"
					// ref={inputRef}
				/>
			</form>
		</div>
	);
}

export default TodoForm;
