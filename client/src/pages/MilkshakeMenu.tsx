import React, { useState } from 'react';
import './MilkshakeMenu.css';

const fruits = [
    { name: 'Blueberry', color: '#4B0082', image: require('../assets/images/blueberry.png') },
    { name: 'Strawberry', color: '#FF6347', image: require('../assets/images/strawberry.png') },
    { name: 'Banana', color: '#FFD700', image: require('../assets/images/banana.png') },
    { name: 'Chocolate', color: '#8B4513', image: require('../assets/images/chocolate.png') },
];


const MilkshakeMenu: React.FC = () => {
    const [shakeColor, setShakeColor] = useState<string>('#FFFFFF');
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
     const milksh = require('../assets/images/milkshake.webp');


    const handleFruitClick = (color: string, fruit: string) => {
        setSelectedFruit(fruit);
        setShakeColor(color);
        setTimeout(() => setSelectedFruit(null), 1000);
    };

    return (
        <div className="menu-container">
            <div className="milkshake">
                <div className="milkshake-glass" style={{ backgroundColor: shakeColor }}>
                    <img src={milksh} alt="Milkshake Glass" className="milkshake-glass-image" />
                    {selectedFruit && (
                        <img src={`${selectedFruit}.png`} alt={selectedFruit} className="fruit-animation" />
                    )}
                </div>
            </div>
            <div className="fruits">
                {fruits.map((fruit) => (
                    <img
                        key={fruit.name}
                        src={fruit.image}
                        alt={fruit.name}
                        className="fruit"
                        onClick={() => handleFruitClick(fruit.color, fruit.name.toLowerCase())}
                    />
                ))}
            </div>
        </div>
    );
};

export default MilkshakeMenu;
