import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
