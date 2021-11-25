import React from 'react';
import './Item.scss';
export const Item = ({ id, title, price, pictureUrl }) => {
	return (
		<div className='list-item' key={id}>
			<h4>{title}</h4>
			<div className='img-div'>
				<img src={pictureUrl} alt='item picture' />
			</div>

			<span className='price'>{`$ ${price}`}</span>
		</div>
	);
};
