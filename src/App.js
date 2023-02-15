import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

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
                  </Routes>
              </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
