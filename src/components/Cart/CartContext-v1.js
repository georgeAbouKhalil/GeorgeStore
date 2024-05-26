import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Get cart data from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Update localStorage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some(
        (cartItem) => cartItem.id === product.id
      );

      if (isProductInCart) {
        toast.error("Product is already in the cart");
        return prevCart;
      } else {
        toast.success("Successfully added to the cart");
        return [...prevCart, product]; // Return a new cart state with the added product
      }
    });
  };

  const clearCart = () => {
    if (cart.length === 0) {
      // toast.error("Car already cleared");
      toast("Car already cleared", {
        icon: "⚠️",
      });
    } else {
      setCart([]);
      toast.success("Cart cleared");
    }
  };

  const deleteProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
    toast.success("Product removed from the cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
