import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { State } from "interfaces/ITask";
import { Task } from "interfaces/ITask";

// Initial State
const initialState: State = {
	tasks: [],
};

// Reducers
export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.tasks.forEach((task) => {
				if (task.id === action.payload) {
					task.deleted = true;
				}
			});
		},
		doneTask: (state, action: PayloadAction<number>) => {
			const index = state.tasks.findIndex((task) => task.id === action.payload);
			const updatedTasks = [...state.tasks];
			updatedTasks[index].done = !updatedTasks[index].done;
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload
					? { ...task, done: updatedTasks[index].done }
					: task
			);

			state.tasks = updatedTasks;
		},
	},
});

// Actions
export const { addTask, deleteTask, doneTask } = tasksSlice.actions;

// Selectors
export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
