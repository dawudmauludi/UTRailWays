import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Ticket } from '../../types/TicketTypes';
import { getAllTickets } from '../../services/TicketService';
import { addToCart } from '../../redux/slice/cart/cartSlice';
import { useAppDispatch } from '../../hooks/useDispatch';

const TicketDetail: React.FC = () => {
  const { id } = useParams();
  const [tiket, setTiket] = useState<Ticket | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const all = await getAllTickets();
      const found = all.find((t) => t.id === Number(id));
      if (found) setTiket(found);
    };
    fetchData();
  }, [id]);
  

   const handleAddToCart = () => {
  if (!tiket) return;
  console.log('Menambahkan tiket ke cart:', tiket);
  dispatch(addToCart(tiket));
  alert('Tiket berhasil dimasukkan ke keranjang!');
};

  if (!tiket) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-4">
      <h2 className="text-xl font-bold mb-4">{tiket.namaKereta}</h2>
      <p><strong>Stasiun Asal:</strong> {tiket.stasiunBerangkat}</p>
      <p><strong>Stasiun Tujuan:</strong> {tiket.stasiunTujuan}</p>
      <p><strong>Waktu:</strong> {new Date(tiket.waktuBerangkat).toLocaleString()} - {new Date(tiket.waktuTiba).toLocaleString()}</p>
      <p><strong>Harga:</strong> Rp {tiket.harga.toLocaleString()}</p>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Masukkan ke Keranjang
      </button>
    </div>
  );
};

export default TicketDetail;
