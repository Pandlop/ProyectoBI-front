import { Route, Router, Routes } from "react-router-dom";
import Endpoint1 from "./components/endpoint1/endpoint1";
import Endpoint2 from "./components/endpoint2/endpoint2";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Endpoint1 />} />
				<Route path="/reentrenar" element={<Endpoint2 />} />
			</Routes>
		</Router>
	);
}

export default App;
