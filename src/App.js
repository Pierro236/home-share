import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Administrator from "./pages/Administrator/Administrator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/administrator_dashboard" element={<Administrator />} />
      </Routes>
    </div>
  );
}

export default App;
