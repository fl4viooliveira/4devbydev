import Cors from "cors";
import axios from "axios";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"],
});

const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      } else {
        return resolve(result);
      }
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

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
}
