import React from 'react';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main>
        <ContactInfo />
      </main>
    </div>
  );
};

export default ContactPage; 