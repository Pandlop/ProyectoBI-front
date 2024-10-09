import Card from "../cardComponent/card";

import SideDashboard from "../sideDashboard/sideDashboard";
import "./endpoint2Styles.css";
import "../cardComponent/cardStyle.css";
function Endpoint2() {
	return (
		<>

      <div className="endpoint1-org">
        <SideDashboard />

        <div className="cards-container">

        <Card color="#33415C">
            <h1>Sapo marica</h1>
            <p>78%</p>
          </Card>


          <Card color="#33415C">
            <h1>F1 Score</h1>
            <p>78%</p>
          </Card>

          <Card color="#33415C">
            <h1>Recall</h1>
            <p>67%</p>
          </Card>

          <Card color="#33415C">
            <h1>Precision</h1>
            <p>99%</p>
          </Card>

           <div className="heatmap">
          <h1>Heatmap</h1>


        </div>

        </div>

       
     </div>
	</>
	);
}
export default Endpoint2;
