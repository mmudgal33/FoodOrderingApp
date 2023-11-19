import React from 'react'
import classes from './cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { removeProduct, incProduct, decProduct, emptyCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { products } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const increaseProduct = (id) => {
    console.log(id)
    dispatch(incProduct({ _id: id }))
  }

  const decreaseProduct = (id) => {
    console.log(id)
    dispatch(decProduct({ _id: id }))
  }



  let totalPrice = 0
  products.map((product) => totalPrice += (product.quantity * product.price))

  const handleRemoveProduct = (id) => {
    console.log(id)
    dispatch(removeProduct({ _id: id }))
  }

  const handleOrder = () => {
    if (products.length > 0) {
      navigate('/checkout')
      // dispatch(emptyCart())
    }
    
  }

  return (
    
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {products.length > 0 ? products.map((product) => (
            <div key={product._id} className={classes.product}>
              <div onClick={() => handleRemoveProduct(product._id)} className={classes.closeBtn}><AiOutlineClose /></div>



              <img src={`http://localhost:5000/images/${product.img}`} className={classes.img} />
              <div className={classes.productData}>
                <h4 className={classes.title}>{product.title}</h4>
                <h6 className={classes.subtitle}>{product.desc}</h6>



                <div className={classes.productAndQuantity}>
                  <span className={classes.quantity}>{product.quantity} x </span>
                  <span className={classes.price}><span>₹</span>{product.price}</span>
                </div>
                <div className={classes.quantityIncDec}>
                  <button disabled={product.quantity === 1} onClick={() => decreaseProduct(product._id)}>-</button>
                  <span className={classes.price}><span>qty</span>{product.quantity}</span>
                  <button onClick={() => increaseProduct(product._id)}>+</button>
                </div>
              </div>
            </div>
          )) : <h1 className={classes.noProducts}>No products in the cart. Go shopping!</h1>}
        </div>
        <div className={classes.right}>
        
          <div className={classes.totalProductMsg}>Total products: {products.length}</div>
          <div className={classes.subtotalCheckoutBtns}>
            <span className={classes.subtotal}>Subtotal: ₹{totalPrice}</span>
            <span onClick={handleOrder} disabled={products.length === 0} className={classes.orderNowBtn}>Order now</span>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Cart

