import SideDashboard from "../sideDashboard/sideDashboard";
import Card from "../cardComponent/card";
// import cardComp  from "../cardComponent/card";
function Endpoint1() {
	return (
		<>
			<SideDashboard />

			
			<div style={{ padding: '20px' }}>


			<Card color="#33415C">
				<h1>F1 Score</h1>
				<p>78%</p>
			</Card>

			<Card color="#33415C">
				<h1>Accuracy</h1>
				<p>85%</p>
			</Card>

			
			</div>


		</>





	
	);
}
export default Endpoint1;
