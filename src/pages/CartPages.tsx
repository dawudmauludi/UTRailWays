// src/pages/CartPage.tsx
import CartList from "../components/organisms/CartLists";
import { useAppSelector } from "../hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { buatTransaksi } from "../services/TransactionServices";

const CartPage = () => {
  const items = useAppSelector((state) => state.cart.items);
  const detailTransaksis = useAppSelector((state) => state.transaction.detailTransaksis);

  const navigate = useNavigate();

  const getQuantity = (id: number) =>
    detailTransaksis.find((item) => item.tiketId === id)?.jumlah || 1;

  const total = items.reduce(
    (acc, item) => acc + item.harga * getQuantity(item.id),
    0
  );

  const handleCheckout = async () => {
  try {
    const payload = detailTransaksis.map((item) => ({
      tiketId: item.tiketId,
      jumlah: item.jumlah,
    }));

    const data = await buatTransaksi(payload);
    console.log("Berhasil:", data);
    localStorage.removeItem("cart");
    navigate("/");
  } catch (error) {
    console.error("Gagal Checkout:", error);
  }
};

  return (
    <div className="container mt-5">
      <h2>Keranjang Saya</h2>
      <CartList />
      {items.length > 0 && (
        <div className="mt-4 text-end">
          <h5>Total: Rp{total.toLocaleString()}</h5>
          <button
            className="btn btn-success mt-2"
            onClick={handleCheckout}
          >
            Lanjut ke Pembayaran
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
