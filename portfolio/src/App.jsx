import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<Home></Home>} />
                  <Route path="/projects" element={<About></About>} />
                  <Route path="/contact" element={<Contact></Contact>} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
