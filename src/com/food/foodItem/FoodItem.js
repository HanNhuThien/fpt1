import { useEffect, useState } from "react";
import Card from "../../../ui/Card";
import Button from "../../../ui/Button";
import cz from "./FoodItem.module.css";

const FoodItem = (props) => {
  const { foodName, foodPrice, foodNoItem: propNoItem } = props.food;
  const updateNumberOfItemHandler = (e) => {
    setNumberOfItem(e.target.value);
  };
  const [numberOfItem, setNumberOfItem] = useState(propNoItem);
  //   const isShowAmount = numberOfItem > 0;
  //   useEffect(()=>{

  //   }, [numberOfItem])
  const calulateAmount = Number.parseFloat(numberOfItem * foodPrice).toFixed(2);
  //  Number.parseFloat(numberOfItem) * Number.parseFloat(foodPrice).toFixed(2);
  const onClickBtnAdd = () => {console.log("c")};
  return (
    <Card className={cz.foodItem}>
      {/*------------------- 1 ------------------- */}
      <span className={cz.foodName}> {foodName}</span>
      {/*------------------- 2 ------------------- */}
      <div>
        <span className={cz.foodPrice}>
          {" "}
          price: <span className={cz.foodPriceNumber}>{foodPrice} </span> $
        </span>
      </div>
      {/* 3 */}
      <div className={cz.foodNoItem}>
        <input
          type="number"
          min="0"
          max="5"
          step="1"
          defaultValue={numberOfItem}
          onChange={updateNumberOfItemHandler}
        />{" "}
        item
        <span className={numberOfItem && numberOfItem > 1 ? "" : cz.hidePlural}>
          s
        </span>
      </div>
      {/* 4 */}
      <span> Amount: {calulateAmount}</span>
      {/* 5 */}
      <Button className={cz.btnAdd} onClick={onClickBtnAdd}>
        Add to card
      </Button>
    </Card>
  );
};

export default FoodItem;
