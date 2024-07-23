import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/login"; // Default export
import Register from "./pages/RegisterPage/register";
import Home from "./pages/home"; // Default export
import Course from "./pages/Kelas/course"; // Default export
import Navbar from "./components/navbar"; // Default export
import DetailKursus from "./pages/Detail/DetailKursus"; // Default export
import About from "./pages/Tentang/about"; // Default export
import Footer from "./pages/Foter/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/course"
          element={
            <>
              <Navbar />
              <Course />
              <Footer />
            </>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <>
              <Navbar />
              <DetailKursus />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
