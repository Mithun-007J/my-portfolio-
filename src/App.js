import React, { useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <Aboutus />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Aboutus />;
    }
  };

  return (
    <div className="App">
      <Drawer onPageChange={setCurrentPage} currentPage={currentPage} />
      <div className="main-content">
        {renderContent()}
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
