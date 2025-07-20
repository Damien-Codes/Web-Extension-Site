import React from 'react';
import Header from '../components/Header';
import LegalMentions from '../components/LegalMentions';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main>
        <LegalMentions />
      </main>
    </div>
  );
};

export default LegalPage; 