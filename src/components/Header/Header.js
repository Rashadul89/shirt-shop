import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This IS header</h2>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/ordereview'>Order Review</Link>
                
            </nav>
        </div>
    );
};

export default Header;