import React from 'react';
import styles from './AddButton.module.css';

interface ButtonProps {
    children: string;
}

const AddButton: React.FC<ButtonProps> = ({children}) => {
    return (
        <button className={styles.addBtn}>
            {children}
        </button>
    );
};

export default AddButton;