import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Menu.css";

interface Drink {
  id: number;
  name: string;
  flavor: string;
  calories: number;
  price: number;
  image: string;
}

interface DrinkListProps {
  drinks: Drink[];
}

const Menu: React.FC<DrinkListProps> = ({ drinks }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedDrink = drinks.find((drink) => drink.id === selectedId);

  const handleCardClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-card">
        {drinks.map((milkshake) => (
          <motion.div
            key={milkshake.id}
            layoutId={milkshake.name}
            onClick={() => handleCardClick(milkshake.id)}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ borderRadius: "10px" }}
            animate={{
              height: 300,
              width: selectedId === milkshake.id ? 400 : 200,
            }}
          >
            <motion.img
              src={milkshake.image}
              alt={milkshake.name}
              className="drink-img"
              style={{ height: selectedId === milkshake.id ? "50%" : "100%" }}
            />
            <motion.h4>{milkshake.name}</motion.h4>
            {selectedId === milkshake.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.p>Flavor: {milkshake.flavor}</motion.p>
                <motion.p>Calories: {milkshake.calories}</motion.p>
                <motion.p>Price: ${milkshake.price}</motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
