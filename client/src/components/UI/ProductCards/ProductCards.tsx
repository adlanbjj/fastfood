import React from 'react';
import styles from './ProductCards.module.css';

interface ProductProps {
    children: React.ReactNode;
}

const Product: React.FC<ProductProps> = ({ children }) => {
    return (
        <div className={styles.productWindow}>
            {children}
        </div>
    );
};

export default Product;
