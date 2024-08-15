import React, { useState } from 'react';
import Product from './UI/ProductCards/ProductCards';
import styles from './UI/ProductCards/ProductCards.module.css';
import AddButton from './UI/Buttons/AddButton';

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
        <div className={styles['slideshow-container']}>
            <div className={styles['product-slide']}>
                <Product key={currentIndex}>
                    <h2>{products[currentIndex].productName}</h2>
                    <img src={products[currentIndex].productImage} alt={products[currentIndex].productName} />
                    <p>Price: ${products[currentIndex].price.toFixed(2)}</p>
                    <AddButton children='Add' />
                </Product>
            </div>

            <button className={styles['prev']} onClick={prevSlide}>&#10094;</button>
            <button className={styles['next']} onClick={nextSlide}>&#10095;</button>

            <div className={styles['dots']}>
                {products.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles['dot']} ${currentIndex === index ? styles['active'] : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Menus;
