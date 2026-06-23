import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Builder from "./pages/Builder";
import SavedHouses from "./pages/SavedHouses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/saved" element={<SavedHouses />} />
    </Routes>
  );
}

export default App
