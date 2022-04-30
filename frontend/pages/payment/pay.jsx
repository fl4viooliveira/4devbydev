import { useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

export default function Pay() {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  // console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5050/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest;
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="4devbydev" // the pop-in header title
        description="4dev test" // the pop-in header subtitle
        //image="/4devlogo.png" // the pop-in header image (default none)
        amount={2000} // cents
        token={onToken} // submit callback
        locale="auto"
        shippingAddress
        billingAddress
        // stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_TEST}
        stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}
