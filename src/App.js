import React from "react";
import "./index.css"

import About from "./routes/About";
import Contact from "./routes/Contact";
import Education from "./routes/Education";
import Home from "./routes/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </>
  );
}

export default App;
