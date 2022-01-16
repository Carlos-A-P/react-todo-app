import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<main className="App">
				<div className="header">
					<h1>Todo</h1>
					<button data-theme-changer onclick="toggleDark()"></button>
				</div>
				<TodoList />
			</main>
			<footer>
				<p>Drag and drop to reorder list</p>
				<div className="attribution">
					Challenge by{" "}
					<a
						href="https://www.frontendmentor.io/profile/Carlos-A-P"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						href="https://carlospwd.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						Carlos Perez
					</a>
					.
				</div>
			</footer>
		</>
	);
}

export default App;
