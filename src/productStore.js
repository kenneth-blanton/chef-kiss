const productsArray = [
  {
    id: 1,
    name: "buffalo-wings",
    image: "images/wings.png",
    shortcap: "Air Fried Lemon Pepper Buffalo Wings",
    caption:
      "Air fried lemon pepper Buffalo wings with baked Cajun Parmesan fries",
    cost: "1.99",
    checkout: "http://bn.plus/RQYZEw",
  },
  {
    id: 2,
    name: "salmon-shrimp",
    image: "images/Salmon and Shrimp.png",
    shortcap: "Salmon & Shrimp Pasta Plate",
    caption:
      "Blackened salmon, shrimp fettuccine with Gouda white wine sauce, asparagus, and garlic bread",
    cost: "1.99",
    checkout: "http://bn.plus/lwe4Sw",
  },
  {
    id: 3,
    name: "hggs",
    image: "images/Honey Garlic Glazed Salmon.png",
    shortcap: "Honey Garlic Glazed Salmon",
    caption: "Glazed salmon fillets with honey garlic sauce",
    cost: "1.99",
    checkout: "http://bn.plus/SCo9kg",
  },
  {
    id: 4,
    name: "sliders",
    image: "images/Salmon Sliders.png",
    shortcap: "Salmon Sliders",
    caption:
      "Salmon, lettuce, pepper jack cheese, onion, pickles and honey mustard on toasted sweet Hawaiian rolls",
    cost: "1.99",
    checkout: "http://bn.plus/dWfb9w",
  },
  {
    id: 5,
    name: "breakfast-wrap",
    image: "images/Breakfast Wrap.png",
    shortcap: "Breakfast Wrap",
    caption:
      "Flour tortilla filled with bacon, ground sausage, eggs, peppers, onions, and cheese",
    cost: "1.99",
    checkout: "http://bn.plus/mePdpw",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("no product");
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
