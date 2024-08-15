import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Product from './UI/ProductCards/ProductCards';
import AddButton from './UI/Buttons/AddButton';
import './Menus.css';

interface ProductList {
    productName: string;
    productImage: string;
    price: number;
}

const Menus: React.FC = () => {
    const products: ProductList[] = [
        {
            productName: 'Burger',
            productImage: 'img/burger.jpg',
            price: 10
        },
        {
            productName: 'Milkshake',
            productImage: 'img/milkshake.jpg',
            price: 5.99
        },
        {
            productName: 'Coffe',
            productImage: 'img/coffe.jpg',
            price: 10
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slideshow-container">
            <div className="product-slide">
                <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    gyroscope={true}
                    className="Tilt-inner"
                >
                    <Product key={currentIndex}>
                        <h2>{products[currentIndex].productName}</h2>
                        <img src={products[currentIndex].productImage} alt={products[currentIndex].productName} />
                        <p>Price: ${products[currentIndex].price.toFixed(2)}</p>
                        <AddButton>Add</AddButton>
                    </Product>
                </Tilt>
            </div>

            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>

            <div className="dots">
                {products.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Menus;
