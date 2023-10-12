import React from "react";
import "./pages/css/normalize.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/header";

// Crée une racine pour l'application React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Fait le rendu de l'application dans la racine
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />{" "}
      </Routes>
    </Router>
  </React.StrictMode>
);
