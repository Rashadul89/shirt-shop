import { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';


import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);


    const addCartHandler = (selectedItem) => {
        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item Already added')
        }

    }

    const removeItemFromCart = (selectedItem) => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt key={tShirt._id} tShirt={tShirt} addCartHandler={addCartHandler}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    removeItemFromCart={removeItemFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;