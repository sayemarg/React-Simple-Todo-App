const TodoItem = ({ todo, onClick, onDelete }) => {
	const onItemClick = () => {
		onClick(todo.id);
	};

	const onDelteClick = (e) => {
		e.stopPropagation();

		onDelete(todo.id);
	};

	const getTodoClassName = () => `todo-item__text ${todo.done ? "done" : ""}`;

	return (
		<div className="todo-item" onClick={onItemClick}>
			<span className={getTodoClassName()}>{todo.text}</span>

			<button className="todo-item__delete" onClick={onDelteClick}>
				&times;
			</button>
		</div>
	);
};

export default TodoItem;
