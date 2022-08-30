import { useState } from "react";
import { TaskForm, TodoItem } from "./components";
import "./assets/app.css";

function App() {
	const MAX_TEXT_LENGTH = 30;

	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");
	const [error, setError] = useState(null);

	const onFormSubmit = (e) => {
		e.preventDefault();

		let inputText = text.trim();

		if (!inputText) {
			setError("Text is mandatory.");
			return;
		}

		if (MAX_TEXT_LENGTH < inputText.length) {
			setError(
				`The maximum text length is ${MAX_TEXT_LENGTH} characters.`
			);
			return;
		}

		const todo = {
			id: Date.now(),
			done: false,
			text: text,
		};

		setTodos(todos.concat(todo));

		setText("");
	};

	const onInputChange = (e) => {
		setText(e.target.value);

		setError(null);
	};

	const onTodoClick = (todoID) => {
		const newTodos = todos.map((todo) =>
			todo.id === todoID
				? {
						...todo,
						done: !todo.done,
				  }
				: todo
		);

		setTodos(newTodos);
	};

	const onTodoDelete = (todoID) => {
		const newTodos = [...todos];

		const index = newTodos.findIndex((item) => item.id === todoID);

		newTodos.splice(index, 1);

		setTodos(newTodos);
	};

	return (
		<div className="wrapper">
			<TaskForm
				text={text}
				error={error}
				onSubmit={onFormSubmit}
				onChange={onInputChange}
			/>

			<div className="todo-list">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onClick={onTodoClick}
						onDelete={onTodoDelete}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
