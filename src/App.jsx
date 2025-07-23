import "./App.css";
import React from "react";
import Home from "./pages/Home";
import InternasionalListPage from "./pages/Trip/InternasionalListPage";
import DomestikListPage from "./pages/Trip/DomestikListPage";
import Honeymoon from "./pages/Paket/Honeymoon";
import Studytour from "./pages/Paket/Studytour";
import Adventure from "./pages/Paket/Adventure";
import SewaMobil from "./pages/SewaMobil";
import TripHome from "./pages/Trip/Home"
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailWisata from "./pages/Trip/DetailWisata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Trip" element={<TripHome />} />

          <Route path="/Trip/Domestik/:region" element={<DomestikListPage />} />
          <Route path="/Trip/Domestik/:region/:slug" element={ <DetailWisata />} />

          <Route path="/Trip/Internasional/:region" element={<InternasionalListPage />} />

          <Route path="/Trip/Honeymoon" element={<Honeymoon />} />
          <Route path="/Trip/Studytour" element={<Studytour />} />
          <Route path="/Trip/Adventure" element={<Adventure />} />
          
          <Route path="/Sewa-mobil" element={<SewaMobil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
