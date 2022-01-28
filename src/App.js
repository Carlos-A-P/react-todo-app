import "./styles/App.css";
import Footer from "./components/Footer";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
	return (
		<>
			<main className="App">
				<TodoHeader />
				<TodoList />
			</main>
			<Footer />
		</>
	);
}

export default App;
