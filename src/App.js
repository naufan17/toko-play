import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home";
import Content from "./pages/Content";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="content/:id" Component={Content}/>
      </Routes>
    </Router>
  );
}