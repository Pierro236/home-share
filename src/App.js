import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Account from "./pages/Account/Account";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
