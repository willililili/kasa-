import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/Apropos"
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
            <Route path="/Apropos" element={<APropos />} />
            <Route path="*" element={<NotFound />} />
          </Route> 
        
        </Routes>
    </Router>
  );
};

export default AppRouter;