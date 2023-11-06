import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Pagenotfound from "./pages/Pagenotfound.js";
// import About from "../src/pages/About.js";

// import Contact from "./pages/Contact.js";
// import Services from "./pages/Services";
// import Policy from "./pages/Policy.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Pagenotfound />} />

      <Route path="/contact" element={<Pagenotfound />} />
      <Route path="/services" element={<Pagenotfound />} />
      <Route path="/policy" element={<Pagenotfound />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
