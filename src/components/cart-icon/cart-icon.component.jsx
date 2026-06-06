import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import {
  CartIconContainer,
  ItemCountContainer,
  StyledShoppingBagIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCart = (e) => {
    // Stop propagation so the NavigationContainer's outside-click handler
    // doesn't immediately close the dropdown we just opened.
    e.stopPropagation();
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleCart} aria-label="Toggle cart">
      <StyledShoppingBagIcon />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
