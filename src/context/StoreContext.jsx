import { createContext, useEffect, useState } from "react";
import { part_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Cart Context
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, value) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: value }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + value }));
    }
  };

  const reOrderFromHistory = (reorderitem) => {
    setCartItems((prev) => ({ ...prev, ...reorderitem }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const increaseCartItem = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const decreaseCartItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = prev[itemId] - 1;
      if (updatedCart[itemId] < 1) {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // Favorite Context

  const [favoriteItems, setFavoriteItems] = useState({});

  const addToFavorite = (itemId) => {
    if (!favoriteItems[itemId]) {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: true }));
    } else {
      setFavoriteItems((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  // History Context

  const [orderHistory, setOrderHistory] = useState([]);

  const addOrderToHistory = (item, subTotal, tax, total, money, delivery) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthAbbreviation = monthAbbreviations[currentDate.getMonth()];
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const id = `${hour < 10 ? "0" + hour : hour}${minute < 10 ? "0" + minute : minute}${second < 10 ? "0" + second : second}`;

    const newItem = {
      id: id,
      date: `${day < 10 ? "0" + day : day} ${monthAbbreviation}, ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`,
      item: item,
      subTotal: subTotal,
      tax: tax,
      total: total,
      money: money,
      delivery: delivery,
    };

    setOrderHistory((prev) => {
      const updatedHistory = [...prev, newItem];
      return updatedHistory.sort((a, b) => b.id - a.id);
    });
  };

  const contextValue = {
    part_list,
    cartItems,
    setCartItems,
    addToCart,
    reOrderFromHistory,
    removeFromCart,
    addToFavorite,
    increaseCartItem,
    decreaseCartItem,
    favoriteItems,
    setFavoriteItems,
    orderHistory,
    addOrderToHistory,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
