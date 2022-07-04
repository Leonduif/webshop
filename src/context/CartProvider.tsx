import { createContext, useContext, useState } from "react";
import { ProductItemProps } from "../components/ProductList";
import items from "./../data/items.json";

type CartProps = {
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  findItem: (id: number) => ProductItemProps[];
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
    console.log("should update quantity", id);
    console.log(findItem(id));
  };

  const removeQuantity = (id: number) => {
    console.log("should remove quantity", id);
  };

  const findItem = (id: number) => items.filter((item) => item.id === id);

  return (
    <Context.Provider
      value={{
        addQuantity,
        removeQuantity,
        cartItems,
        findItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCart() {
  return useContext(Context);
}
