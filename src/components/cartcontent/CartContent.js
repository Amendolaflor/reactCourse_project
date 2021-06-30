import React from 'react';
import {UseCartContext} from "../../context/CartContext"

function CartContent() {
	const {cart} = UseCartContext();
	
	return (
		<div>
		 <p>Soy el carrito</p>{console.log(cart)}
		</div>
		
	)
	
}

export default CartContent
