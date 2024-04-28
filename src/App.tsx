import TodoDashboard from "./components/TodoDashboard/TodoDashboard";
import { BrowserRouter, HashRouter } from "react-router-dom";

const App = (): JSX.Element => {
	return (
		<HashRouter>
			<TodoDashboard />
		</HashRouter>
	);
};

export default App;
