import React from 'react';
import './Tshirt.css';

const Tshirt = ({tShirt,addCartHandler}) => {
    
    const {picture,name,_id,price}=tShirt;
    return (
        <div className='singleTshirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{_id}</p>
            <h5>${price}</h5>
            <button onClick={()=>addCartHandler(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;