const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");
const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };

router.post("/order", (req, res) => {
  const dataBody = req.body;
  const orderData = dataBody.order;
  axios
    .post(`https://api.printful.com/orders`, orderData, { headers })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/confirm", (req, res) => {
  const dataBody = req.body;
  const orderId = dataBody.id;
  const orderStore = dataBody.store;

  const url = `https://api.printful.com/orders/${orderId}/confirm`;
  axios
    .post(
      url,
      {},
      {
        headers: headers,
      }
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
