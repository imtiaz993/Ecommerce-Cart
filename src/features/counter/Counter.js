import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  Remove_Item,
  Save_Shipping_Address,
  Save_Payment_Method,
  Clear_Cart,
} from './counterSlice';

export function Counter() {
  // Get cart from redux state
  const cart = useSelector(state => state.counter);
  const dispatch = useDispatch();


  return (
    <div >
      <h1>Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Qty</th>
            {/*This will clear all the cart items and set state to empty array,
            payment method and shipping address as well.
            in other words it will make empty  cart
            */}
            {cart.cartItems.length !== 0 && <button onClick={() => { dispatch(Clear_Cart()) }}>Clear Cart</button>}
          </tr>
        </thead>

        {/*Populating the cart items */}
        {
          cart.cartItems.map((x, index) =>


            <tbody key={index}>
              <tr>
                <td><img src={x.img} width="100" height="150" />  </td>
                <td><p>{x.model}</p></td>
                <td><p>{x.company}</p></td>
                <td><p>{x.price}</p></td>
                <td><p>{x.qty}</p></td>
                <td>
                  {/*Removing item from cart. item id shoud be passed to match which cart item should be deleted*/}
                  <button onClick={() => { dispatch(Remove_Item(x.id)) }}>Remove</button><br />

                  {/*Increementing item qty. item id shoud be passed to match which cart item should be increemented*/}
                  <button onClick={() => { dispatch(increment(x.id)) }}>Increase</button><br />

                   {/*decreementing item qty. item id shoud be passed to match which cart item should be decreemented*/}
                  <button onClick={() => { dispatch(decrement(x.id)) }}>Decrease</button><br />

                </td>
              </tr>
            </tbody>
          )
        }
      </table>

      {cart.cartItems.length !== 0 && <div>
        {/*when you get address from user with input and dispatch it to redux */}
        <button onClick={() => { dispatch(Save_Shipping_Address("Addresssss")) }}>Save Address</button><br /><br />

        {/*you set payment method*/}
        <button onClick={() => { dispatch(Save_Payment_Method("Payment Methoddd")) }}>Save Payment</button><br />
      </div>}
    </div>
  );
}
