import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='search-bar'>
            <form action="">
                <input type="text" name='search' placeholder='Serch...' />
            </form>
        </div>
    );
};

export default Header;