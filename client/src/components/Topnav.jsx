import React from 'react';

import { FaSearch, FaRegUser } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import './topnav.scss';

const Topnav = () => {
    return (
        <div className='topnav'>
            <div className='topnav__product-name'>
                <h1>MICHAEL KORS</h1>
            </div>
            <div className='topnav__icons'>
                <div className='topnav__icon-wrapper'>
                    <FaSearch className='topnavIcon' />
                </div>
                <div className='topnav__icon-wrapper'>
                    <BiShoppingBag className='topnavIcon' />
                </div>
                <div className='topnav__icon-wrapper'>
                    <FaRegUser className='topnavIcon' />
                </div>
            </div>
        </div>
    );
};

export default Topnav;
