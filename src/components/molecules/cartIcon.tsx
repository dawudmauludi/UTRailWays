// CartIcon.tsx
import IconWithBadge from "../atoms/IconWithBadge";
import { useAppSelector } from "../../hooks/useDispatch";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const itemCount = cartItems.length;

  return (
      <IconWithBadge
        icon={<FaShoppingCart size={24} className="text-white" />}
        count={itemCount}
      />

  );
};

export default CartIcon;
