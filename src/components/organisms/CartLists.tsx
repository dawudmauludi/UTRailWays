// src/components/organisms/CartList.tsx
import { useAppSelector } from "../../hooks/useDispatch";
import CartItem from "../molecules/CartItem";

const CartList = () => {
  const items = useAppSelector((state) => state.cart.items);

  if (items.length === 0) {
    return <p className="text-center">Keranjang masih kosong.</p>;
  }

  return (
    <div className="card p-3 shadow-sm">
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          harga={item.harga}
        />
      ))}
    </div>
  );
};

export default CartList;
