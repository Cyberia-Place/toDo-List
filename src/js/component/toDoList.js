import React, { useState } from "react";

export const ToDoList = () => {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	const [visibility, setVisibility] = useState("");

	const userInterface = todoList.map((element, index) => {
		return (
			<div
				key={index}
				className="input-style px-5 py-2"
				onMouseEnter={() => setVisibility(index)}
				onMouseLeave={() => setVisibility("")}>
				{todoList[index]}
				<button
					type="button"
					className={`input-button-style bg-white ${
						visibility === index ? "" : "d-none"
					}`}
					onClick={() => deleteToDo(index)}>
					X
				</button>
			</div>
		);
	});

	const submitFunction = event => {
		setTodoList([...todoList, todo]);
		event.preventDefault();
	};

	const deleteToDo = index => {
		var array = [...todoList];
		array.splice(index, 1);
		setTodoList(array);
	};

	return (
		<form onSubmit={submitFunction}>
			<div className="card table rounded-0">
				<input
					type="text"
					className="rounded-0 input-style px-5"
					placeholder="What needs to be done?"
					onChange={event => setTodo(event.target.value)}
				/>
				{userInterface}
			</div>
		</form>
	);
};
