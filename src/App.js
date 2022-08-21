import { useState } from "react";
import "./assets/app.css";

function App() {
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([]);

	const onFormSubmit = (e) => {
		e.preventDefault();

		const trimmedText = text.trim();

		if (!trimmedText) {
			window.alert("Text is mandatory.");
			return;
		}

		if (20 < trimmedText.length) {
			window.alert("The maximum text length is 20 characters.");
			return;
		}

		setCounter((counter) => counter + 1);

		const todo = {
			id: counter,
			text: trimmedText,
			done: false,
		};

		setTodos([...todos, todo]);

		setText("");
	};

	const onTodoItemClick = (e, todoID) => {
		const newTodos = [...todos];

		const index = newTodos.findIndex((item) => item.id === todoID);

		if (e.target.matches(".todo-item__delete")) {
			newTodos.splice(index, 1);
		} else {
			newTodos[index].done = !newTodos[index].done;
		}

		setTodos(newTodos);
	};

	const getTodoClassName = (todo) =>
		`todo-item__text ${todo.done ? "done" : ""}`;

	return (
		<div className="wrapper">
			<form onSubmit={onFormSubmit} className="todo-form">
				<div className="form-input">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="form-input__text"
						max="20"
					/>
					<button type="submit" className="form-input__button">
						+
					</button>
				</div>
			</form>

			<div className="todo-list">
				{todos.map((todo) => (
					<div
						className="todo-item"
						key={todo.id}
						onClick={(e) => onTodoItemClick(e, todo.id)}
					>
						<span className={getTodoClassName(todo)}>
							{todo.text}
						</span>

						<button className="todo-item__delete">&times;</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
