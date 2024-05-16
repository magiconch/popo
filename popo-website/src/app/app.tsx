"use client";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
