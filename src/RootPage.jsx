import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import Cadastro from "./pages/Cadastro";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App;