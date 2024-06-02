import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonails" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
