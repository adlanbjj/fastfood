import React from 'react';
import Product from './UI/ProductCards/ProductCards';
import styles from './UI/ProductCards/ProductCards.module.css'; // Не забудьте импортировать стили
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
    ];

    const repeatedProducts = Array(6).fill(products).flat();

    return (
        <div className={styles['menu-cont']}>
            {repeatedProducts.map((product, index) => (
                <Product key={index}>
                    <h2>{product.productName}</h2>
                    <img src={product.productImage} alt={product.productName} />
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <AddButton children='Add' />
                </Product>
            ))}
        </div>
    );
};

export default Menus;
