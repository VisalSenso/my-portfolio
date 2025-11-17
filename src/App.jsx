import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
