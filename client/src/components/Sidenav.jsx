import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './sidenav.scss';

const Sidenav = () => {
    return (
        <div className='sidenav'>
            <div className='sidenav__menu'>
                <div className='sidenav__icon-wrapper'>
                    <HiMenuAlt1 className='menuIcon' />
                </div>
            </div>
            <div className='sidenav__sosmed'>
                <div className='sidenav__icon-wrapper'>
                    <FaTwitter className='sosmedIcon' />
                </div>
                <div className='sidenav__icon-wrapper'>
                    <FaFacebookF className='sosmedIcon' />
                </div>
                <div className='sidenav__icon-wrapper'>
                    <FaLinkedinIn className='sosmedIcon' />
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
