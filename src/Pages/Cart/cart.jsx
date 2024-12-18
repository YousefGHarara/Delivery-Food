import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { useFood } from '../../Context/FoodContext';
import './cart.css'
import React from 'react';

const Cart = () => {

  const {data, removeFromData, food_list, totalCount, DELIVERY_FEE} = useFood();
  const navigate = useNavigate();

  return (
    <div className='cart layout'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if(data[item._id] > 0) {
            return (
              <>
              <div className="cart-items-title cart-items-item">
                <img className='cart-items-title-icon' src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{data[item._id]}</p>
                <p>${item.price * data[item._id]}</p>
                <img onClick={() => removeFromData(item._id)} className='cart-items-title-remove' src={assets.cross_icon} alt="" />
              </div>
              <hr/>
              </>
              
            )
          }
          return <></>
        })}

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className='cart-total-content'>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${totalCount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${DELIVERY_FEE}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <strong>Total</strong>
                <strong>${totalCount() + DELIVERY_FEE}</strong>
              </div>
              <hr />
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promocode">
            <div className='cart-promocode-content'>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-item-inputs">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
