import { CartContext } from "../CartContext";
import { useContext, useState } from "react";
import { getProductData } from "../CartContext";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  //   const productData = getProductData(id);
  const [productData, setProductData] = useState({ title: "hello" });
  getProductData(id).then((item) => setProductData(item));

  return (
    <>
      <h3>{productData.title}</h3>
      <p>Quantity: {quantity}</p>
      <p>${quantity * productData.price}</p>
      <button
        onClick={() => cart.deleteFromCart(id)}
        style={{
          cursor: "pointer",
          marginBottom: "1em",
          maxWidth: 150,
          height: 30,
          color: "white",
          backgroundColor: "red",
          border: "none",
          boxShadow: "0 0 2px 1px black",
          borderRadius: 4,
        }}
      >
        Remove from cart
      </button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
