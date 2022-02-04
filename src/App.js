import { useState } from "react";
import "./styles/App.css";
import Footer from "./components/Footer";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
	const [dark, setDarkTheme] = useState(false);

	const switchTheme = (x) => {
		console.log("switch");
		setDarkTheme(!dark);
	};

	return (
		<div className={dark ? "page-wrap dark-theme" : "page-wrap"}>
			<main className="App">
				<div className="todo-wrapper">
					<TodoHeader pageTheme={switchTheme} />
					<TodoList />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
