import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './checkout.module.css'

import {  emptyCart } from '../../redux/cartSlice'


const Checkout = () => {
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const emptyYourCart = () => {
    dispatch(emptyCart())
  }

  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Your order is successful</h2>
        <p>Expect it in 1 hour</p>
        <span>Total Price: ₹{totalPrice}</span>
        <span onClick={emptyYourCart} className={classes.emptyCart}>Empty your cart</span>
      </div>
    </div>
  )
}

export default Checkout