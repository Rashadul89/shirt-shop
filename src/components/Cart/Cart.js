import React from 'react';
import './Cart.css'

const Cart = ({cart,removeItemFromCart}) => {
    // conditional rendering topic 4 ways
    // Element Variable 
    /* tournary operator */
    // &&  
    // || 

    let command;
    if(cart.length===0){
         command = <p>Please Atleast one item</p>
    }
    else if(cart.length===1){
        command=<p>please add another items</p>
    }
    else{
        command=<p>Thanks for adding</p>
    }
    return (
        <div className='cart-components'>
            <h2>Your Added Product in Cart:{cart.length}</h2>
           
        {
            cart.map(tShirt=><p>
                {tShirt.name}
                <button onClick={()=>removeItemFromCart(tShirt)}>X</button>
            </p>)
        }
         {command}
        
         {cart.length!==4 ?  <p>Keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;