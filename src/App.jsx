import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Home from "./Pages/Home";
import BuyCar from "./Components/BuyAndSell/BuyingCar/BuyCar";
import SellCar from "./Components/BuyAndSell/SellingCar/SellCar";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buy-car" element={<BuyCar />} />
      <Route path="/sell-car" element={<SellCar />} />
    </Routes>
  );
}

export default App;
