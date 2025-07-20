import React from 'react';
import Header from '../components/Header';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
    </div>
  );
};

export default PrivacyPage; 