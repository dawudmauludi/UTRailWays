// src/components/molecules/CartItem.tsx
import { FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { removeFromCart } from "../../redux/slice/cart/cartSlice";
import { addToTransaction } from "../../redux/slice/transaction/transactionSlice";

interface Props {
  id: number;
  harga: number;
}

const CartItem = ({ id, harga }: Props) => {
  const dispatch = useAppDispatch();

   const quantity = useAppSelector(
  (state) =>
    state.transaction.detailTransaksis.find((item) => item.tiketId === id)?.jumlah || 0
);
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  const handleAdd = () => {
    dispatch(addToTransaction({ tiketId: id, jumlah: 1 }));
  }

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <div className="d-flex flex-column">
        <small>Qty: {quantity}</small>
        <small>Harga: {harga}</small>
      </div>
      <div className="text-end">
         <button className="btn btn-sm btn-success" onClick={handleAdd}>
          +
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
