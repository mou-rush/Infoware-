import "./App.css";
import data from "./components/DummyData";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { productItems } = data;
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
