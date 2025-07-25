import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectCategory from "./pages/ProjectCategory";
import ItemDetail from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:id" element={<ProjectCategory />} />
        <Route path="/Projects/:categoryId/:itemId" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
