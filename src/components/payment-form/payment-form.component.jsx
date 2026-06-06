import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { BUTTON_TYPES_CLASSES } from "../button/button-classes";
import {
  CardElementWrapper,
  DevNote,
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";

// Detect dev vs prod — Netlify functions only run under `netlify dev` or in prod.
// When running plain `vite dev`, the function endpoint returns 404.
const IS_DEV = import.meta.env.DEV;
const PAYMENT_ENDPOINT = IS_DEV
  ? null // no function server available under plain `vite dev`
  : "/.netlify/functions/create-payment-intent";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    // In plain `vite dev`, the Netlify function server isn't running.
    // Payments only work under `netlify dev` or on the deployed site.
    if (!PAYMENT_ENDPOINT) {
      alert(
        "Payments require the Netlify function server.\n\n" +
          "Run `netlify dev` instead of `npm run dev` to test payments locally.\n\n" +
          "Or deploy to Netlify where the function runs automatically.",
      );
      return;
    }

    setIsProcessingPayment(true);
    try {
      const res = await fetch(PAYMENT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Function error:", res.status, text);
        alert(
          `Payment setup failed (${res.status}). Check your Netlify function.`,
        );
        setIsProcessingPayment(false);
        return;
      }

      const response = await res.json();

      if (response.error) {
        alert("Error creating payment intent: " + response.error);
        setIsProcessingPayment(false);
        return;
      }

      const paymentResult = await stripe.confirmCardPayment(
        response.paymentIntent.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser ? currentUser.displayName || "Guest" : "Guest",
            },
          },
        },
      );

      setIsProcessingPayment(false);

      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  // IMPORTANT: Stripe's iframe cannot read CSS custom properties (var(--token)).
  // All values must be hardcoded hex. These match the design tokens exactly.
  // fontSize must be in px — Stripe warns and ignores rem/em values.
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.getAttribute("data-theme") === "dark";

  const cardOptions = {
    style: {
      base: {
        // Light: --text #1C1712  |  Dark: --text #F0EAE0
        color: isDark ? "#F0EAE0" : "#1C1712",
        fontFamily: "'Jost', 'Helvetica Neue', sans-serif",
        fontSmoothing: "antialiased",
        // Must be px — Stripe ignores rem/em and logs a warning
        fontSize: "16px",
        // Light: --text-muted #8A7D6E  |  Dark: --text-muted #7A6E5E
        "::placeholder": {
          color: isDark ? "#7A6E5E" : "#8A7D6E",
        },
        iconColor: isDark ? "#C9A84C" : "#B8972A",
      },
      invalid: {
        color: "#c0392b",
        iconColor: "#c0392b",
      },
    },
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Payment Details</h2>
        {IS_DEV && (
          <DevNote>
            ⚠ Run <code>netlify dev</code> (not <code>npm run dev</code>) to
            test payments locally. The Netlify function server is required.
          </DevNote>
        )}
        <CardElementWrapper $isDark={isDark}>
          <CardElement options={cardOptions} />
        </CardElementWrapper>
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPES_CLASSES.base}
        >
          Pay Now — ${amount}
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
