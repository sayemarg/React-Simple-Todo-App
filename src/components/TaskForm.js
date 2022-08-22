import { useState } from "react";

const TaskForm = ({ onSubmit, placeHolder, buttonText }) => {
	const [text, setText] = useState("");

	const onFormSubmit = (e) => {
		e.preventDefault();

		onSubmit(text);

		setText("");
	};

	const onInputChange = (e) => {
		setText(e.target.value);
	};

	return (
		<form onSubmit={onFormSubmit} className="todo-form">
			<div className="form-input">
				<input
					type="text"
					value={text}
					onChange={onInputChange}
					className="form-input__text"
					placeholder={placeHolder}
					max="20"
				/>

				<button type="submit" className="form-input__button">
					{buttonText}
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
