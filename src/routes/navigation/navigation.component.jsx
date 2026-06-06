import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import LogoIcon from "../../components/icons/logo.component";
import ThemeToggle from "../../components/theme-toggle/theme-toggle.component";
import { setIsCartOpen } from "../../store/cart/cart.reducer.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  LogoContainer,
  NavAccentLine,
  NavigationContainer,
  NavLink,
  NavRight,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navRef = useRef(null);

  // Close cart dropdown when clicking anywhere outside the nav bar.
  useEffect(() => {
    if (!isCartOpen) return;

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        dispatch(setIsCartOpen(false));
      }
    };

    // Use capture phase so this fires before any child click handlers.
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isCartOpen, dispatch]);

  // Close cart on Escape key.
  useEffect(() => {
    if (!isCartOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") dispatch(setIsCartOpen(false));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isCartOpen, dispatch]);

  return (
    <Fragment>
      <NavAccentLine />
      <NavigationContainer ref={navRef}>
        <LogoContainer>
          <NavLink to="/" onClick={() => dispatch(setIsCartOpen(false))}>
            <LogoIcon />
          </NavLink>
        </LogoContainer>

        <NavRight>
          <NavLink to="/shop" onClick={() => dispatch(setIsCartOpen(false))}>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              onClick={() => {
                dispatch(setIsCartOpen(false));
                signOutUser();
              }}
              style={{ cursor: "pointer" }}
            >
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth" onClick={() => dispatch(setIsCartOpen(false))}>
              Sign In
            </NavLink>
          )}
          <ThemeToggle />
          <CartIcon />
        </NavRight>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
