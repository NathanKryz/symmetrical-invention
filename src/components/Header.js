// Render the navigation as part of the header, make sure to import it
import React, { useState } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './Navigation';

export default function Header() {
const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div className="d-flex p-2">
        <nav className="navbar navbar-expand-lg">
        <p className="navbar-brand">Nathan Kryzanowski</p>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
    {renderPage()}
    </div>
    );
  }

