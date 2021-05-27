import React, { useState } from "react";

let List = [];
export const ToDoList = () => {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");

	const userInterface = todoList.map((element, index) => {
		return (
			<div key={index} className="input-style px-5">
				{todoList[index]}
			</div>
		);
	});

	const submitFunction = event => {
		setTodoList([...todoList, todo]);
		event.preventDefault();
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
