import FoodItem from "../foodItem/FoodItem";
import cz from "./FoodList.module.css";

const FoodList = (props) => {
  const mapFoodItem = (food) => <FoodItem key={food.id} food={food}></FoodItem>;

  const foodList = props.foodList.map(mapFoodItem);

  return <div className={cz.foodList}>{foodList}</div>;
};

export default FoodList;
