import React from 'react'
import carrito from '../../assets/imgs/carrito.jpg'

function CartWidget() {
  return (
    <div className="cart-cont">
      <img className="cart" src={carrito} alt="carrito logo" />
    </div>
  );
}

export default CartWidget;
