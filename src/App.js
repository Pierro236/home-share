import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import Administrator from "./pages/Administrator/Administrator";
import AdminFAQ from "./pages/AdminFAQ/AdminFAQ";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import AdminMailbox from "./pages/adminMailbox/AdminMailbox";
import AdminAnnonces from "./pages/adminAnnonces/AdminAnnonces";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/admin" element={<Administrator />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/adminFAQ" element={<AdminFAQ />} />
        <Route path="/adminMailbox" element={<AdminMailbox/>}/>
        <Route path="/adminAnnonces" element={<AdminAnnonces/>}/>
      </Routes>
    </div>
  );
}

export default App;
