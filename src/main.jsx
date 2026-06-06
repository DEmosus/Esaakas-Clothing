import { Elements } from "@stripe/react-stripe-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { registerSW } from "virtual:pwa-register";

import App from "./App.jsx";
import { persistor, store } from "./store/store.js";
import { stripePromise } from "./utils/stripe/stripe.util.js";

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
