// src/pages/Home.tsx
import React from 'react';
import TicketSelector from '../components/organisms/TicketSelector';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Booking Kereta</h1>
      <TicketSelector />
    </div>
  );
};

export default HomePage;
