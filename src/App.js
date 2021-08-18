import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Navigation from "./navigation";
import Slider from "./silder";

function App() {
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <Slider />

      <br></br>
      <div>
        <h3>Explore more via the Singapore Map</h3>
      </div>
      <div>
        <iframe
          className="alltrails"
          src="https://data.gov.sg/dataset/park-connector-loop/resource/c186e1b5-0e47-4891-8710-f9844b993449/view/514d0738-ffec-43f4-ae21-cd6a36bad111"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
