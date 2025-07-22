// src/components/organisms/TicketSelector.tsx
import React, { useEffect, useState } from 'react';
import SelectWithLabel from '../molecules/SelectWithLabel';
import type { Ticket } from '../../types/TicketTypes';
import { getAllTickets } from '../../services/TicketService';
import { useNavigate } from 'react-router';

const TicketSelector: React.FC = () => {
  const [data, setData] = useState<Ticket[]>([]);
  const [filteredData, setFilteredData] = useState<Ticket[]>([]);
  const [stasiunAsal, setStasiunAsal] = useState('');
  const [stasiunTujuan, setStasiunTujuan] = useState('');

  const navigate = useNavigate();

  const handleClickDetail = (id: number) => {
    navigate(`/tiket/${id}`);
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTickets();
      setData(res);
    };
    fetchData();
  }, []);

  const stasiunAsalOptions = [...new Set(data.map((item) => item.stasiunBerangkat))];
  const stasiunTujuanOptions = [...new Set(data.map((item) => item.stasiunTujuan))];

  

  const handleSearch = () => {
  const result = data.filter((item) => {
    const matchAsal = stasiunAsal ? item.stasiunBerangkat === stasiunAsal : true;
    const matchTujuan = stasiunTujuan ? item.stasiunTujuan === stasiunTujuan : true;
    return matchAsal && matchTujuan;
  });

  setFilteredData(result);
};

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Cari Tiket Kereta</h2>

      <SelectWithLabel
        id="asal"
        label="Kota Asal"
        value={stasiunAsal}
        onChange={(e) => setStasiunAsal(e.target.value)}
        options={stasiunAsalOptions}
      />

      <SelectWithLabel
        id="tujuan"
        label="Kota Tujuan"
        value={stasiunTujuan}
        onChange={(e) => setStasiunTujuan(e.target.value)}
        options={stasiunTujuanOptions}
      />

      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Cari Tiket
      </button>

      <div className="mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((tiket) => (
            <div  key={tiket.id}
            onClick={() => handleClickDetail(tiket.id)} className="border p-2 rounded mb-2 shadow-sm">
              <p><strong>Kereta:</strong> {tiket.namaKereta}</p>
              <p><strong>Tipe:</strong> {tiket.tipe}</p>
              <p><strong>Harga:</strong> Rp {tiket.harga.toLocaleString()}</p>
              <p><strong>Waktu:</strong> {new Date(tiket.waktuBerangkat).toLocaleString()} - {new Date(tiket.waktuTiba).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">Belum ada tiket ditampilkan</p>
        )}
      </div>
    </div>
  );
};

export default TicketSelector;
