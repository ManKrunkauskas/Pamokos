
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import RegisterBook from './pages/RegisterBook.jsx';
import EditBookPage from './pages/EditBookPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterBook />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
        