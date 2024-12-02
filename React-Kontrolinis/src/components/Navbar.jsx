
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Bibliotekos Valdymas</h1>
      <div>
        <Link to="/">Pagrindinis</Link>
        <Link to="/register">Registruoti Knygą</Link>
      </div>
    </nav>
  );
};

export default Navbar;
            