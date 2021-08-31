import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalMoney: 0,
};
const cartReducer = (state, action) => {
  if (action.type === TYPE_ADD) {
    let updatedItems = [...state.items];

    const existing_duplicate_index = updatedItems.findIndex(
      (e) => e.id === action.item.id
    );

    if (existing_duplicate_index === -1) {
      updatedItems = [...updatedItems, action.item];
    } else {
      updatedItems[existing_duplicate_index].foodNoItem +=
        action.item.foodNoItem;
    }
    console.table(updatedItems);

    // const updatedtotalMoney=state.totalMoney
    const updatedtotalMoney = 5;

    return {
      items: updatedItems,
      totalMoney: updatedtotalMoney,
    };
  }
  return defaultCartState;
};

const TYPE_ADD = "type_add";

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartState({ type: TYPE_ADD, item: item });
    // console.log(item);
    // return [...cartCtx.items, item];
  };

  const removeItemHandler = (id) => {
    // cartCtx.foodList =
    cartCtx.items.filter((e) => e.id !== id);
    // return cartCtx.foodList;
  };

  const cartCtx = {
    items: cartState.items,
    totalMoney: cartState.totalMoney,
    addItemFn: addItemHandler,
    removeItemFn: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
