import React, { useState } from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { bag1, bag2 } from '../assets';

import './product.scss';

const colors = [
    {
        id: 1,
        name: 'color1',
        bg: 'https://michaelkors.scene7.com/is/image/MichaelKors/30F1G9HS9L-0230_swatch?$swatchLarge$',
    },
    {
        id: 2,
        name: 'color2',
        bg: 'https://michaelkors.scene7.com/is/image/MichaelKors/30F1G9HS9L-0001_swatch?$swatchLarge$',
    },
];

const Product = () => {
    const [selected, setSelected] = useState(1);
    const [isFavorite, setFavorite] = useState(false);

    return (
        <div className='product'>
            <div className='product__img'>
                <img src={selected === 1 ? bag2 : bag1} alt='bag' />
            </div>
            <div className='product__desc'>
                <div className='product__rating'>
                    {[...Array(5)].map((i) => {
                        return (
                            <span className='star' key={i}>
                                &#9733;
                            </span>
                        );
                    })}
                </div>
                <h3 className='product__name'>
                    Hamilton Legacy Large Leather Belted Satchel
                </h3>
                <p className='product__style'>Style# 30F1G9HS9L</p>
                <p className='product__price'>$356.42</p>
                <div className='product__colors'>
                    <h3>Colors</h3>
                    <ul className='colors'>
                        {colors.map((color) => (
                            <li
                                key={color.id}
                                onClick={() => setSelected(color.id)}
                                className={`${
                                    selected === color.id ? 'selected' : ''
                                }`}
                            >
                                <input
                                    type='radio'
                                    name='bag'
                                    id={color.name}
                                />
                                <label
                                    htmlFor={color.name}
                                    className={color.name}
                                    style={{
                                        background: `url(${color.bg})`,
                                    }}
                                ></label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='product__quantity'>
                    <h3>Quantity</h3>
                    <select name='quantity' id='quantity'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>
                <div className='product__fav'>
                    <button onClick={() => setFavorite(!isFavorite)}>
                        <MdOutlineFavorite
                            className={`${
                                isFavorite ? 'favIcon fav' : 'favIcon'
                            }`}
                        />
                        <p>Add to favorites</p>
                    </button>
                </div>
                <button className='product__cart'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
