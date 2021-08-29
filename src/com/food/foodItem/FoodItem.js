import { useContext, useState } from "react";
import Card from "../../../ui/Card";
import Button from "../../../ui/Button";
import cz from "./FoodItem.module.css";
import CartContext from "../../../store/CartContext";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { id, foodName, foodPrice, foodNoItem: propNoItem } = props.food;

  const [numberOfItem, setNumberOfItem] = useState(propNoItem);

  const updateNumberOfItemHandler = (e) => {
    setNumberOfItem(parseInt(e.target.value));
  };

  //   const isShowAmount = numberOfItem > 0;
  //   useEffect(()=>{

  //   }, [numberOfItem])
  const calulateAmount = Number.parseFloat(numberOfItem * foodPrice).toFixed(2);
  //  Number.parseFloat(numberOfItem) * Number.parseFloat(foodPrice).toFixed(2);
  const onClickBtnAdd = () => {
    //console.table(cartCtx);
    setNumberOfItem(0);
    cartCtx.addItemFn({ ...props.food, foodNoItem: numberOfItem });
  };

  const MAX_BUY_AMOUNT_PER_ITEM = 5;

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
          max={MAX_BUY_AMOUNT_PER_ITEM}
          step="1"
          onChange={updateNumberOfItemHandler}
          value={numberOfItem}
        />
        item
        <span className={numberOfItem && numberOfItem > 1 ? "" : cz.hidePlural}>
          s
        </span>
      </div>
      {/* 4 */}
      <span> Amount: {calulateAmount}</span>
      {/* 5 */}
      <Button
        className={cz.btnAdd}
        onClick={onClickBtnAdd}
        disabled={
          !(numberOfItem > 0 && numberOfItem < MAX_BUY_AMOUNT_PER_ITEM + 1)
        }
      >
        Add to card
      </Button>
    </Card>
  );
};

export default FoodItem;
