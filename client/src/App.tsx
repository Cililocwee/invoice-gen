import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import ChakraNav from "./components/ChakraNav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <ChakraNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
