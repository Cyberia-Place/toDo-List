import React from "react";
import { ToDoList } from "./toDoList.js";

//create your first component
export function Home() {
	return (
		<div>
			<p className="todo-header display-3">toDo List</p>
			<ToDoList />
		</div>
	);
}
