import React from 'react';

import './app.scss';
import Sidenav from './components/Sidenav';
import Topnav from './components/Topnav';
import Product from './components/Product';

const App = () => {
    return (
        <div className='app'>
            <div className='app__sidenav'>
                <Sidenav />
            </div>
            <div className='app__wrapper'>
                <div className='bg'></div>
                <div className='app__topnav'>
                    <Topnav />
                </div>
                <div className='app__product'>
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default App;
