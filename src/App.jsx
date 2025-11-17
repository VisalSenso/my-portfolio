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
<<<<<<< HEAD

        <Routes>
          <Route path="/" element={<Home/>} />
=======
        
        <Routes>
          <Route path="/" element={<Home />} />
          
>>>>>>> 47b1312de6cc9f2d36cde602b09e55f1d53c1f29
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
