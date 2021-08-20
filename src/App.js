import "./App.css";
import {} from "react-bootstrap";
import Navigation from "./containers/navigation";
import Weather from "./weather";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Weather />
    </div>
  );
}

export default App;
