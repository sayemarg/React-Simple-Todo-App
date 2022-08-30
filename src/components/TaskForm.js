const TaskForm = ({ text, error, onSubmit, onChange }) => {
	return (
		<form onSubmit={onSubmit} className="todo-form">
			<div className="form-input">
				<input
					type="text"
					value={text}
					onChange={onChange}
					className="form-input__text"
					placeholder="Todo Text"
					max="20"
				/>

				<button type="submit" className="form-input__button">
					+
				</button>
			</div>

			{error ? (
				<div className="todo-form__error">
					<small>{error}</small>
				</div>
			) : null}
		</form>
	);
};

export default TaskForm;
