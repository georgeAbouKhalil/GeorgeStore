import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCurrentUser } from "../../data/user";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const currentUser = getCurrentUser();

  const [cart, setCart] = useState(() => {
    if (!currentUser) return [];
    const savedCart = localStorage.getItem(`${currentUser.email}`); // getting the obj user
    const currentUserCart = savedCart ? JSON.parse(savedCart).cart : []; // getting the current cart
    return currentUserCart ? currentUserCart : [];
  });

  useEffect(() => {
    if (currentUser) {
      const savedData = { ...currentUser, cart };
      localStorage.setItem(`${currentUser.email}`, JSON.stringify(savedData)); // update the cart everytime cart or currentuser update
    }
  }, [cart, currentUser]);

  const addToCart = (product) => {
    if (!currentUser) {
      toast.error("User is not logged in");
      return;
    }

    setCart((prevCart) => {
      const isProductInCart = prevCart.some(
        (cartItem) => cartItem.id === product.id
      );

      if (isProductInCart) {
        toast.error("Product is already in the cart");
        return prevCart;
      } else {
        toast.success("Successfully added to the cart");
        return [...prevCart, product];
      }
    });
  };

  const clearCart = () => {
    if (!currentUser) {
      toast.error("User is not logged in");
      return;
    }

    if (cart.length === 0) {
      toast("Cart already cleared", { icon: "⚠️" });
    } else {
      setCart([]);
      toast.success("Cart cleared");
    }
  };

  const deleteProduct = (productId) => {
    if (!currentUser) {
      toast.error("User is not logged in");
      return;
    }

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

export { CartProvider };
