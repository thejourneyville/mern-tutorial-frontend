import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <div className="App">
            {/* BrowserRouter sits outside of all Routes */}
            <BrowserRouter>
              <Navbar />
              <div className="pages">
                  {/* Routes tag holds each route */}
                  <Routes>
                      {/* This route shows the Home component at the "/" path */}
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                  </Routes>
              </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
