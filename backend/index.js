const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const printfulRoute = require("./routes/printful");
const cors = require("cors");

dotenv.config();

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("DB Connection Successful!"))
//   .catch((err) => {
//     console.log(err);
//   });

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/printful", printfulRoute);

app.listen(process.env.PORT || 5050, () => {
  console.log("Backend server is running!");
});
