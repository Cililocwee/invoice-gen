import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import About from "./pages/About";
import InvoicingGuide from "./pages/InvoicingGuide";
import Nav from "./components/Nav";
import ChakraNav from "./components/ChakraNav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <ChakraNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/invoicing-guide" element={<InvoicingGuide />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
