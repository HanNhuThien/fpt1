import "./App.css";
import CartProvider from "./store/CartProvider";
import FoodList from "./com/food/foodList/FoodList";
import { useContext, useState } from "react";
import Cart from "./com/cart/Cart"

function App() {
  const DUMMY_FOOD_LIST = [
    { id: 1, foodName: "food 1", foodPrice: 11.11, foodNoItem: 0 },
    { id: 2, foodName: "food 2", foodPrice: 12.12, foodNoItem: 0 },
    { id: 3, foodName: "food 3", foodPrice: 13.13, foodNoItem: 0 },
    { id: 4, foodName: "food 4", foodPrice: 14.14, foodNoItem: 0 },
  ];

  //const foodCtx = useContext(FoodContext);
  const [foodList, setFoodList] = useState(DUMMY_FOOD_LIST);
  //const foodCtx = useContext(ThemeContext);

  return (
    <CartProvider className="App">
      <div className="header">
      <Cart/>
      </div>
      <FoodList foodList={foodList}></FoodList>
    </CartProvider>
  );
}

export default App;
