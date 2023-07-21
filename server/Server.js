// 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
// Cajun Salmon: price_1NSn2iASWBo4MeqxhMrZxoTY
// Baked Chicken: price_1NSn4bASWBo4MeqxcdPOy7eY

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "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"
);
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
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
    success_url: "https://chefkissunlimited.com/#/admin",
    cancel_url: "https://chefkissunlimited.com/#/preps",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(80, () => console.log("Listening on port 80"));
