import React, { useState } from "react";
import { useAppDispatch } from "redux/hooks/hooks";
import { addTask } from "redux/features/tasksSlice";
import "./TaskForm.css";

const TaskForm: React.FC = () => {
	const [task, setTask] = useState({ name: "", done: false, deleted: false });
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = document.getElementById("todo") as HTMLInputElement;
		if (task.name.trim() === "") {
			input.placeholder = "Please enter a task";
			return;
		} else {
			dispatch(addTask({ ...task, id: Math.random() }));
			setTask({ name: "", done: false, deleted: false });
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				className="inputTodo"
				placeholder="Create a new todo..."
				aria-label="Create a new todo..."
				id="todo"
				value={task.name}
				onChange={(e) => setTask({ ...task, name: e.target.value })}
			/>
		</form>
	);
};

export default TaskForm;
