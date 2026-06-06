import { loadStripe } from "@stripe/stripe-js";

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripeKey) {
  console.warn(
    "[Esaaka] VITE_STRIPE_PUBLISHABLE_KEY is not set.\n" +
      "Copy .env.example to .env.local and add your Stripe publishable key.\n" +
      "Payments will not work until this is configured.",
  );
}

export const stripePromise = stripeKey
  ? loadStripe(stripeKey)
  : Promise.resolve(null);
