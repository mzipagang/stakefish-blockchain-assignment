import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import ExchangeDir from "./pages";
import ExchangeDetails from "./pages/details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExchangeDir />} />
        <Route path="/details/:id" element={<ExchangeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
