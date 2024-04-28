import TaskItem from "components/TaskItem/TaskItem";
import { useAppSelector } from "redux/hooks/hooks";
import "./TaskList.css";
import { Tab } from "interfaces/ITask";

export const TaskList = (prop: { tab: Tab }) => {
	const tasks = useAppSelector((state) => state.tasks.tasks);

	return (
		<ul className="list">
			{tasks
				.filter(
					(task) =>
						(prop.tab === Tab.DELETED && task.deleted === true) ||
						(prop.tab === Tab.ACTIVE && task.deleted === false)
				)
				.map((task) => (
					<li className="item" key={task.id}>
						<TaskItem task={task} />
					</li>
				))}
		</ul>
	);
};
