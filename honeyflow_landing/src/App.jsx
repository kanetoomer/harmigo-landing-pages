import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;