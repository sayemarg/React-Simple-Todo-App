import { useState } from "react";
import { TaskForm, TodoItem } from "./components";
import "./assets/app.css";

function App() {
	const [counter, setCounter] = useState(0);
	const [todos, setTodos] = useState([]);

	const onFormSubmit = (text) => {
		text = text.trim();

		if (!text) {
			window.alert("Text is mandatory.");
			return;
		}

		if (20 < text.length) {
			window.alert("The maximum text length is 20 characters.");
			return;
		}

		setCounter((counter) => counter + 1);

		const todo = {
			id: counter,
			done: false,
			text: text,
		};

		setTodos(todos.concat(todo));
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
				onSubmit={onFormSubmit}
				placeHolder="Todo text"
				buttonText="+"
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
