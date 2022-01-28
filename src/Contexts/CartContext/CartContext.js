import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setCart(JSON.parse(cartLocal));
    }
  }, []);
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    setCart((old) => {
      let quantity = 0;
      if (old[product.Id]) {
        quantity = old[product.Id].quantity;
      }
      const newCart = {
        ...old,
        [product.Id]: {
          quantity: quantity + 1,
          product,
        },
      };
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    const removeFromCart = (productId) => {
      setCart((old) => {
        const newCart = {};
        Object.keys(old).forEach((id) => {
          if (id !== productId) {
            newCart[id] = old[id];
          }
        });
        window.localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    };

    const changeQuantity = (productId, newQuantity) => {
      setCart((old) => {
        const newCart = {};
        Object.keys(old).forEach((id) => {
          const newProduct = { ...old[id] };
          if (id === productId) {
            newProduct.quantity = newQuantity;
          }
          newCart[id] = newProduct;
        });
        window.localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    };
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
