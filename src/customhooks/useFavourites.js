import { useState } from "react";

/* Manage a persisted list of favorite product IDs */
const useFavorites = () => {
  // Read once from localStorage (lazy init)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  /* Add ID if missing, remove if present, then persist */
  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
