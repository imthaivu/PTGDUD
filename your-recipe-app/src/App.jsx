import React from "react";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/filters.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
