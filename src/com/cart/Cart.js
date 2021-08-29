import CartContext from "../../store/CartContext";
import { useContext, useState } from "react";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const badgeNumber = cartCtx.items.length;

  return <div>{badgeNumber}</div>;
};

export default Cart;
