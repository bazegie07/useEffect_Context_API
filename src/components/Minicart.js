import React, {useContext}  from 'react';
import ShoppingCart from '../contexts/ShoppingCart';
export default () => {
    const cartItem = useContext(ShoppingCart);

    return( 
        <div>
        <h1>Shopping Cart</h1>
        {cartItem.map((item, i) => (
        <div>
            <p>{item.title}</p>
            <p>{item.brand}</p>
            <p>{item.price}</p>
        </div>
    ))}
    </div>
    );
}