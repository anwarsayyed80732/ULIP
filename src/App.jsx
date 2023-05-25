import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Nextpage from "./pages/Nextpage";
import ShipmentDetails from "./pages/ShipmentDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submitrequest/:shipmentId" element={<Nextpage />} />
      <Route path="/shipments/:shipmentId" element={<ShipmentDetails />} />
    </Routes>
  );
}

export default App;
