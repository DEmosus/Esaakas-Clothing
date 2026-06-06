import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "../global.styles";
import Spinner from "./components/spinner/spinner.component";
import { ThemeProvider } from "./contexts/theme.context";
import { setCurrentUser } from "./store/user/user.reducer";
import {
  createUserProfileDocument,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const Shop = lazy(() => import("./components/shop/shop.component"));
const CheckoutPage = lazy(
  () => import("./routes/check-out/check-out.component"),
);
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component"),
);
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component"),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserProfileDocument(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
