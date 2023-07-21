import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "./database/firebase";

export async function getProductData(id) {
  const q = await getDocs(collection(db, "mealPreps"));

  let productData = q.docs.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData.data();
}

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  // const [cost, setCost] = useState(0);

  // function getTotalCost() {
  //   cartProducts.map((cartItem) => {
  //     let totalCost = 0;
  //     getProductData(cartItem.id).then((item) => {
  //       totalCost += item.price * cartItem.quantity;
  //       setCost(totalCost);
  //     });
  //   });
  //   return cost;
  // }

  const [cost, setCost] = useState(0);

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      getProductData(cartItem.id).then((item) => {
        totalCost += item.price * cartItem.quantity;
        setCost(totalCost);
        return cost;
      });
      return cost;
    });
    return cost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
