// import { Link } from "react-router-dom";
import MealPrepCarousel from "./components/MealPrepCarousel";
import { db } from "./database/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext, useRef } from "react";
import { Modal } from "antd";
import { CartContext } from "./CartContext";
import CartProduct from "./components/CartProduct";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
const MealPreps = () => {
  const [isPickUp, setIsPickUp] = useState(true);

  const handlePickUp = () => {
    setIsPickUp(true);
    document.getElementById("pickUpButton").style.boxShadow =
      "0px 0px 2px 1px red";
    document.getElementById("deliveryButton").style.boxShadow = "none";
  };

  const handleDelivery = () => {
    setIsPickUp(false);
    document.getElementById("deliveryButton").style.boxShadow =
      "0px 0px 2px 1px red";
    document.getElementById("pickUpButton").style.boxShadow = "none";
  };

  useEffect(() => {
    // if (isPickUp) {
    // } else {
    // }
  }, [isPickUp]);

  useJsApiLoader({
    googleMapsApiKey: "AIzaSyB9im8lQv0am1-trKuFQp4O0dhtIRgOGNs",
    libraries: ["places"],
  });

  // console.log(isLoaded);

  const originRef = useRef("9415 McNeil Dr Austin TX 78750").current;
  const destinationRef = useRef();
  const [distance, setDistance] = useState("");

  async function calculateRoute() {
    if (destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    console.log(destinationRef.current.value);

    // eslint-disable-next-line no-undef
    const dis = new google.maps.DistanceMatrixService();
    const result = await dis.getDistanceMatrix({
      origins: [originRef],
      destinations: [destinationRef.current.value],
      travelMode: "DRIVING",
      unitSystem: 1,
    });
    setDistance(result.rows[0].elements[0].distance.text.split(" mi")[0]);
    console.log(distance);
  }

  function calcShipping() {
    // eslint-disable-next-line
    if (distance == "" || destinationRef.current.value === "") {
      return (
        <>
          <p>Please Enter Your Pick Up Spot</p>
        </>
      );
    } else if (distance < 5) {
      return (
        <>
          <p>Delivery Fee: Free</p>
          <button
            style={{
              flex: 1,
              maxWidth: 100,
              backgroundColor: "white",
              borderRadius: 4,
              boxShadow: "0 0 2px 1px red",
            }}
            id="checkout"
            onClick={checkout}
          >
            Checkout
          </button>
        </>
      );
    } else if (distance > 20) {
      return <p>Too far. Please Select Pick Up</p>;
    } else {
      return (
        <>
          <p>Delivery Fee: ${Number(distance).toFixed(2)}</p>
          <button
            style={{
              flex: 1,
              maxWidth: 100,
              backgroundColor: "white",
              borderRadius: 4,
              boxShadow: "0 0 2px 1px red",
            }}
            id="checkout"
            onClick={checkout}
          >
            Checkout
          </button>
        </>
      );
    }
  }

  const [mealPrep, setMealPrep] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    async function getPreps() {
      const q = query(collection(db, "mealPreps"), where("active", "==", true));
      const querySnapshot = await getDocs(q);
      setMealPrep(querySnapshot.docs);
    }
    getPreps();
    console.log(cart);
    // eslint-disable-next-line
  }, [cart.items]);

  const checkoutButton = () => {
    return (
      <button
        style={{
          flex: 1,
          maxWidth: 100,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0 0 2px 1px red",
        }}
        id="checkout"
        onClick={checkout}
      >
        Checkout
      </button>
    );
  };

  const checkout = async () => {
    var delivery;
    if (isPickUp || distance < 5) {
      delivery = 0;
    } else {
      delivery = Number((distance * 100).toFixed(2));
    }
    await fetch("http://localhost:4502/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart.items,
        delivery,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <div className="MealPreps">
      <h1>Meal Preps!</h1>
      <br />
      <section>
        <p id="mealTag">5 Meals For $55</p>
        <p id="mealTag2">(Plus $2 per Salmon, Shrimp, or Steak Meal)</p>
      </section>
      <br />
      <h2>This Week's Menu</h2>
      <div className="MealPrepOptions">
        {mealPrep.map((option, i) => {
          const productQuantity = cart.getProductQuantity(option.id);
          return (
            <div className="mealOpt" key={option.data().title}>
              <img
                src={option.data().image}
                alt={option.data().image}
                style={{ maxWidth: 380 }}
              />
              <p style={{ boxShadow: "none" }}>{option.data().description}</p>
              <p>${option.data().price}</p>
              {productQuantity > 0 ? (
                <>
                  <div>
                    <button onClick={() => cart.addOneToCart(option.id)}>
                      +
                    </button>
                    <button onClick={() => cart.removeOneFromCart(option.id)}>
                      -
                    </button>
                    <br />
                    <button
                      type="primary"
                      style={{
                        border: "1px solid white",
                        height: 40,
                        marginBottom: 16,
                      }}
                      onClick={showModal}
                    >
                      Buy {productsCount} Meals
                    </button>
                  </div>
                </>
              ) : (
                <button onClick={() => cart.addOneToCart(option.id)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div
            style={{
              cursor: "pointer",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              gap: 50,
            }}
          >
            <button
              style={{
                cursor: "pointer",
                marginBottom: "1em",
                width: 150,
                height: 30,
                color: "white",
                backgroundColor: "red",
                border: "none",
                boxShadow: "0 0 2px 1px black",
                borderRadius: 4,
              }}
              onClick={handleOk}
            >
              Close
            </button>
          </div>,
        ]}
      >
        {productsCount > 0 ? (
          <>
            <h1>Items in your cart</h1>
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              ></CartProduct>
            ))}

            <div style={{ padding: "0 3em", margin: "1em 0" }}>
              <div style={{ display: "flex", marginBottom: "1em" }}>
                <button
                  id="pickUpButton"
                  onClick={handlePickUp}
                  style={{
                    backgroundColor: "white",
                    flex: 2,
                    cursor: "pointer",
                    height: 30,
                    borderRadius: 4,
                  }}
                >
                  Pick Up
                </button>
                <span style={{ flex: 1 }}>or</span>
                <button
                  id="deliveryButton"
                  onClick={handleDelivery}
                  style={{
                    backgroundColor: "white",
                    flex: 2,
                    cursor: "pointer",
                    height: 30,
                    borderRadius: 4,
                  }}
                >
                  Delivery
                </button>
              </div>
              <div>
                {isPickUp ? (
                  <>
                    <p>
                      Pick up at <br /> 9415 McNeil Dr Austin TX 78750
                    </p>
                    {checkoutButton()}
                  </>
                ) : (
                  <>
                    <Autocomplete>
                      <input
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginBottom: 8,
                        }}
                        type="text"
                        placeholder="Origin"
                        value={originRef}
                        disabled
                      />
                    </Autocomplete>
                    <p id="warning">Enter your pick up spot</p>
                    <Autocomplete>
                      <input
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginBottom: 12,
                        }}
                        type="text"
                        placeholder="Destination"
                        ref={destinationRef}
                      />
                    </Autocomplete>
                    <button
                      style={{
                        backgroundColor: "white",
                        flex: 2,
                        cursor: "pointer",
                        height: 30,
                        borderRadius: 4,
                      }}
                      onClick={calculateRoute}
                    >
                      Calculate Route
                    </button>
                    {calcShipping()}
                  </>
                )}
              </div>
            </div>

            <h1>Total: ${cart.getTotalCost()}</h1>
            <hr />
          </>
        ) : (
          <>
            <h1>There are no items in your cart!</h1>
          </>
        )}
      </Modal>
      <MealPrepCarousel />
    </div>
  );
};

export default MealPreps;
