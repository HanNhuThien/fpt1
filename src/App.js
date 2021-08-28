import './App.css';
import FoodList from './com/food/foodList/FoodList';

function App() {

  const DUMMY_FOOD_LIST = [
    {id: 1, foodName: 'food 1', foodPrice: 11.11, foodNoItem: 0},
    {id: 2, foodName: 'food 2', foodPrice: 12.12, foodNoItem: 0},
    {id: 3, foodName: 'food 3', foodPrice: 13.13, foodNoItem: 0},
    {id: 4, foodName: 'food 4', foodPrice: 14.14, foodNoItem: 0},
]

  return (
    <div className="App">
      <FoodList foodList={DUMMY_FOOD_LIST}></FoodList>
    </div>
  );
}

export default App;
