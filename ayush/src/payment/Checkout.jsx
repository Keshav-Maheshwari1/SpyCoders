import axios from "axios";
import React from "react";
import useRazorpay from "react-razorpay";

// Get environment variables
const uri = import.meta.env.VITE_SERVER_URI;
const amount = 100; // This should be in the smallest unit, e.g., paise for INR

// Ensure user-related details are available
const userName = "John Doe"; // Replace with actual user data
const email = "john.doe@example.com"; // Replace with actual user data
const contact = "1234567890"; // Replace with actual user data

const Checkout = () => {
  const [Razorpay, isLoaded] = useRazorpay(); // Destructure Razorpay and loading state

  const handlePayment = async () => {
    if (!isLoaded) {
      console.error("Razorpay library is not loaded yet.");
      return;
    }

    try {
      const orderId = await createOrder();

      if (!Razorpay) {
        throw new Error("Razorpay is not initialized");
      }

      const options = {
        key: "rzp_test_G5oQ7IeIHoGxCO",
        amount: amount * 100, // Amount should be in the smallest unit
        currency: "INR",
        name: userName,
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId, // Ensure this is the correct ID
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Signature: ${response.razorpay_signature}`);
        },
        prefill: {
          name: userName,
          email: email,
          contact: contact,
        },
        notes: {
          address: "ABC, Delhi",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert("Payment failed")
        alert(`Order ID: ${response.error.metadata.order_id}`);
        alert(`Payment ID: ${response.error.metadata.payment_id}`);
      });

      rzp1.open();
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  const createOrder = async () => {
    try {
      const response = await axios.get(`${uri}/payment/${amount}`);
      return response.data; // Ensure this returns the correct `orderId`
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  return (
    <div
      onClick={handlePayment}
      className="w-24 h-24 test-2xl font-serif text-orange-300 cursor-pointer"
    >
      Checkout
    </div>
  );
};

export default Checkout;
