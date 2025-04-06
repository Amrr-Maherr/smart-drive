import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Home from "./Pages/Home";
import BuyAndSell from "../src/Pages/BuyAndSell"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars-for-sale" element={<BuyAndSell />} />
    </Routes>
  );
}

export default App;
