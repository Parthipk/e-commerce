import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); 
  const handleRemove = (itemId) => {
     dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const buy=()=>{
alert("your product will reach soon");
  }
  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="flex flex-wrap space-x-4">
          {cart.map((item, index) => (
            <li key={item.id} className="w-fit mt-32 ml-20">
              <div className="card flex flex-col items-center" style={{ width: '18rem' }}>
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-text text-center">${item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button className="btn btn-success m-9" onClick={buy}>
                    BUY NOW
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
