/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "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"
);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: req.body.delivery,
            currency: "USD",
          },
          display_name: "Delivery Fee",
        },
      },
    ],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://chefkissunlimited.com/preps",
    cancel_url: "https://chefkissunlimited.com/preps",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4504, () => console.log("Listening on port 4504"));
