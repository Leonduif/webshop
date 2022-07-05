import { createContext, useContext, useState } from "react";

type CartProps = {
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  getItemQuantity: (id: number) => number;
  getTotalItemQuantity: () => number;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

type CartProvider = {
  children: JSX.Element | JSX.Element[];
};

const Context = createContext({} as CartProps);

export function CartProvider({ children }: CartProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addQuantity = (id: number) => {
    setCartItems((currItems) => {
      const isCurrentItem = currItems.find((item) => item.id === id);
      if (isCurrentItem) {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              id,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeQuantity = (id: number) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return {
            id,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    });
  };

  const getTotalItemQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <Context.Provider
      value={{
        addQuantity,
        removeQuantity,
        cartItems,
        getItemQuantity,
        getTotalItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCart() {
  return useContext(Context);
}
