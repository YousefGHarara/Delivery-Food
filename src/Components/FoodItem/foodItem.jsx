import { assets } from "../../assets/frontend_assets/assets";
import { useFood } from "../../Context/FoodContext";
import "./foodItem.css";
import React from "react";

const FoodItem = ({ item }) => {
  const { _id, name, image, price, description } = item;
  const { items, dispatch, addToData, removeFromData, data } = useFood();

  const handleAddToCart = (product) => {
    const isExists = items.cartItems.find((item) => item._id === product._id);
    if (!isExists) {
      dispatch({
        type: "add_to_cart",
        payload: { ...product, quantity: 1, total: product.price },
      });
    } else {
      dispatch({
        type: "update_quantity",
        payload: {
          id: isExists._id,
          quantity: isExists.quantity + 1,
          total: isExists.price * isExists.quantity,
        },
      });
    }
  };

  const updateQuantity = (id, quantity, price) => {
    if (quantity <= 0) {
      dispatch({ type: "remove_from_cart", payload: { id: id } });
    } else {
      dispatch({
        type: "update_quantity",
        payload: {
          id: id,
          quantity: quantity,
          total: price * quantity,
        },
      });
    }
  };

  return (
    <div className="food-item" key={_id}>
      <div className="food-item-img-container">
        <img src={image} alt="" />

        {items.cartItems.find((item) => item._id === _id) ? (
          items.cartItems.map((item) => {
            if (item._id === _id) {
              return (
                <div className="food-item-counter">
                  <img
                    onClick={() =>
                    {
                      updateQuantity(item._id, item.quantity + 1, item.price)
                      addToData(item._id)
                    }
                      
                    }
                    className="btn"
                    src={assets.add_icon_green}
                    alt=""
                  />
                  <p>{item.quantity}</p>
                  <img
                    onClick={() =>
                    {
                      updateQuantity(item._id, item.quantity - 1, item.price)
                      removeFromData(item._id)
                    }
                    }
                    className="btn"
                    src={assets.remove_icon_red}
                    alt=""
                  />
                </div>
              );
            } else {
              return <></>;
            }
          })
        ) : (
          <img
            onClick={() => {
              handleAddToCart(item);
              addToData(item._id)
            }}
            className="btn-add btn"
            src={assets.add_icon_white}
            alt=""
          />
        )}


        {/* {data[Number(_id)] > 0 ? (
          
          <div className="food-item-counter">
            <img
              onClick={() => {
                addToData(item._id);
              }}
              className="btn"
              src={assets.add_icon_green}
              alt=""
            />
            <p>{data[Number(_id)]}</p>
            <img
              onClick={() => {
                removeFromData(item._id);
              }}
              className="btn"
              src={assets.remove_icon_red}
              alt=""
            />
          </div>
        ) : (
          <img
            onClick={() => {
              addToData(item._id);
            }}
            className="btn-add btn"
            src={assets.add_icon_white}
            alt=""
          />
        )} */}

      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
