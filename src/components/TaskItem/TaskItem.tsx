import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Task } from "interfaces/ITask";
import { useAppDispatch } from "redux/hooks/hooks";
import { deleteTask, doneTask } from "redux/features/tasksSlice";
import "./TaskItem.css";

interface TaskItemProps {
	task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const dispatch = useAppDispatch();
	const [checked, setChecked] = useState<boolean>(task.done);

	const handleChangeCheckbox = () => {
		if (task.deleted === false) {
			setChecked(!checked);
			dispatch(doneTask(task.id));
		}
	};

	return (
		<div className="container">
			<div className="checkbox">
				<button className="button" onClick={handleChangeCheckbox}>
					<IoCheckmarkDone
						className={checked ? "completedIcon" : "inCompletedIcon"}
					/>
				</button>
				<h2>{task.name}</h2>
			</div>
			{!task.deleted && (
				<button
					className="deleteIcon"
					aria-label="Delete Task"
					onClick={() => dispatch(deleteTask(task.id))}
				>
					<IoMdClose />
				</button>
			)}
		</div>
	);
};

export default TaskItem;
