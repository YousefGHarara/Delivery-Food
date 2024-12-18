import { useFood } from "../../Context/FoodContext";
import FoodItem from "../FoodItem/foodItem";
import "./foodDisplay.css";
import React from "react";

const FoodDisplay = () => {
  const { food_list, category } = useFood();

  console.log("Rendering > ... <");

  return (
    <div className="food-display">
      <h2>Top disahes near you</h2>
      <div className="food-display-list">

        
        {/* category(cake) === 'all' or (cake) === 'salad' -> false
        category(cake) === 'all' or (cake) === 'deserts' -> false
        category(cake) === 'all' or (cake) === 'sandwich' -> false
        category(cake) === 'all' or (cake) === 'cake' -> true */}
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category) {
            return <FoodItem key={index} item={item} />;
          }return <></>
        })}

        {/* {category !== "All"
          ? food_list
              .filter((item) => {
                return category.startsWith(item.category);
              })
              .map((item, index) => {
                return <FoodItem key={index} item={item} />;
              })
          : food_list.map((item, index) => {
              return <FoodItem key={index} item={item} />;
            })} */}
      </div>
    </div>
  );
};

export default FoodDisplay;
