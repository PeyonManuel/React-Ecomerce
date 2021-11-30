import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { Cart } from '../Cart/Cart';
import { CartButtons } from '../CartButtons/CartButtons';
import './CartContainer.scss';
export const CartContainer = () => {
	const { cart, removeItem, clear, totalCompra } = useContext(CartContext);
	return (
		<div className='cart-container'>
			{
				//si hay carrito
				cart.length > 0 ? (
					<>
						<Cart cart={cart} removeItem={removeItem} />
						<CartButtons cart={cart} clear={clear} totalCompra={totalCompra} />
					</>
				) : (
					//si no hay carrito
					<>
						<h1>El carrito esta vacio</h1>
						<Link to='/'>Volver</Link>
					</>
				)
			}
		</div>
	);
};
