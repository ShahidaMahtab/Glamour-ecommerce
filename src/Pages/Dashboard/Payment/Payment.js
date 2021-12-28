import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import useAxios from "../../../hooks/useAxios";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const Payment = () => {
  const { orderId } = useParams();
  const { client } = useAxios();
  const [order, setOrder] = React.useState({});
  const stripePromise = loadStripe(
    "pk_test_51Jw6ifG7HrHcr2IyP64GByXr2qFejyfDiKZpyLn3GeuTzc6nZNiyPp2jAkk6W8rPNxO4mYhRm16rFgiudEFCATAX00fhfo4vlH"
  );
  useEffect(() => {
    client.get(`/payments/${orderId}`).then((response) => {
      setOrder(response.data);
    });
  }, [orderId]);
  return (
    <div className="mb-10">
      <div className=" flex justify-center p-5 bg-gray-100 text-left">
        <div className="p-10 ">
          <h1 className="text-white">Payment Details</h1>
          <h1 className="text-white">Date : {order?.date} </h1>
          <h1 className="text-white">
            Item Ordered : {order?.orderItems?.length}{" "}
          </h1>
          <h1 className="text-white">Tax : $10 </h1>
          <h1 className="text-white">Shipping : $15 </h1>
          <div className="border border-white flex justify-between"></div>
          <h1 className="text-white">Total Price : ${order?.grandTotal} </h1>
        </div>
      </div>
      <div className="px-80 bg-gray-100 text-white">
        {order?.grandTotal && (
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;
