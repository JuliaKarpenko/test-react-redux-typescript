import TaskForm from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import {
	Link,
	useNavigate,
	useLocation,
	Routes,
	Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab } from "interfaces/ITask";
import "./TodoDashboard.css";

const TodoDashboard = () => {
	const navigate = useNavigate();
	const [tab, setTab] = useState<Tab>(Tab.ACTIVE);

	useEffect(() => {
		navigate("#");
	}, []);

	return (
		<div className="dashboard">
			<TaskForm />
			<nav className="navButtons">
				<Link
					to=""
					onClick={() => setTab(Tab.ACTIVE)}
					className={tab === Tab.ACTIVE ? "active" : ""}
				>
					All
				</Link>
				<Link
					to="deleted"
					onClick={() => setTab(Tab.DELETED)}
					className={tab === Tab.DELETED ? "active" : ""}
				>
					Deleted
				</Link>
			</nav>
			<Routes>
				<Route path="" element={<TaskList tab={Tab.ACTIVE} />} />
				<Route path="deleted" element={<TaskList tab={Tab.DELETED} />} />
			</Routes>
		</div>
	);
};

export default TodoDashboard;
