const express = require("express");
const cors = require("cors");
const bodParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce =  require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4000;

app.use(compression());
app.use(bodParser.json());
app.use(bodParser.urlencoded({ extended: true }));
// app.use(enforce.HTTPS({trustProtoHeader: true}));
app.use(cors());

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`server running on port :${port}`);
});

// use for PWA to get the service-worker file inside build
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.get("/", (req, res) => {
  res.send({
    messgage: 'server'
  })
})

app.post("/payment", (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd"
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({ error: stripeErr });
        }else {
            res.status(200).send({ success: stripeRes });
        }
    })
})