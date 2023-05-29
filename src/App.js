import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FlightsPage from "./pages/FlightsPage/FlightsPage";
import FlightToCityPage from "./pages/FlightToCityPage/FlightToCityPage";
import HomePage from "./pages/HomePage/HomePage";
import HostingCityPage from "./pages/HostingCityPage/HostingCityPage";
import HotelPage from "./pages/HotelPage/HotelPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights/:idCity" element={<FlightsPage />} />
          <Route path="city/flights/:id" element={<FlightToCityPage />} />
          <Route path="/hosting/:idCity" element={<HostingCityPage />} />
          <Route path="city/hosting/:id" element={<HotelPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
