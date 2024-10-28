'use client';
import React, { useState } from 'react';


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Analog Magazine Rack', price: 120, quantity: 2, color: 'Red' },
    { id: 2, name: 'Closca helmet', price: 132, quantity: 1, color: 'Black' },
    { id: 3, name: 'Sig Water Bottle', price: 23, quantity: 2, color: 'Gravel Black' },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems(cartItems.map(item => 
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + increment) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex w-full max-w-4xl">
        
        {/* Product List */}
        <div className="w-2/3 p-4 bg-white shadow-lg rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4">PRODUCT</th>
                <th className="pb-4">PRICE</th>
                <th className="pb-4">QUANTITY</th>
                <th className="pb-4">TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.color}</div>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4">${item.price * item.quantity}</td>
                  <td className="py-4">
                    <button onClick={() => removeItem(item.id)} className="text-red-500 font-bold">
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="w-1/3 p-4 ml-6 bg-gray-50 shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="mb-2 text-sm text-green-500">Add coupon code</div>
          <hr className="my-4"/>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
