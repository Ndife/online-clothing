import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import swal from 'sweetalert';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_szEaffOYY7y0uG5zEdCzzDDL";

  const onToken = (token) => {
    axios({
      url: "https://online-clothing-b5tv9uyql-ndife.vercel.app/payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        swal("Good job!", "Payment successful", "success");
        
      })
      .catch(error => {
        console.log("Payment error ", JSON.stringify(error));
        swal("Failed", "There was an issue with your payment. Please make sure to use the provided credit card", "error");
      });
  };

  return (
    <StripeCheckout
      label=" Pay Now"
      name=" Clothtify Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel=" Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
