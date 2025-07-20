import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Get current path to determine which page to show
  const currentPath = window.location.pathname;

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      {currentPath === '/legal' ? <LegalPage /> : 
       currentPath === '/privacy' ? <PrivacyPage /> : 
       currentPath === '/contact' ? <ContactPage /> : 
       <HomePage />}
    </div>
  );
}

export default App;
