import "./App.css";
import data from "./components/DummyData";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";

function App() {
  const { productItems } = data;
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoutes productItems={productItems} />
      </Router>
    </div>
  );
}

export default App;
