import React, { createContext, useContext, useReducer, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

const FoodContext = createContext(null);

let defaultData = {};

for(let i = 0; i < food_list.length; i++) {
  defaultData = {
    ...defaultData,
    [food_list[i]._id] : 0
  }
}

const FoodContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [data, setData] = useState(defaultData);
  /*
  data - setData :
  thats mean : 
  {  positionProducts : countOfProducts
    0: 0,     
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    and so on
  }
  */


  const addToData = (productId) => {
    if(!data[productId]) {
      setData(prev => {
        return {...prev, [productId] : 1}
      })
    }else {
      setData(prev => {
        return {...prev, [productId] : prev[productId] + 1 }
      })
    }
  }

  const removeFromData = (productId) => {
    if(data[productId] > 0) {
      setData(prev => {
        return {...prev, [productId] : prev[productId] - 1}
      })
    }
  }

  const initailValue = {
    cartItems: [],
  };

  

  const foodReducer = (state, action) => {
    switch (action.type) {
      case "add_to_cart": {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

      case "update_quantity": {
        const newData = state.cartItems.map((item) => {
          if (item._id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity, total: action.payload.total };
          }
          return item;
        });
        return {
          ...state,
          cartItems: newData,
        };
      }

      case "remove_from_cart": {
        const filterdData = state.cartItems.filter((item) => {
          return item._id !== action.payload.id;
        });
        return {
          ...state,
          cartItems: filterdData,
        };
      }

      default:
        return state;
    }
  };

  const [items, dispatch] = useReducer(foodReducer, initailValue);

  const value = {
    food_list,
    category,
    setCategory,
    items,
    dispatch,
    data,
    setData,
    addToData,
    removeFromData
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFood = () => {
  return useContext(FoodContext);
};

export default FoodContextProvider;
