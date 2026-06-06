import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
    CartDropdownContainer,
    CartDropdownTitle,
    CartItemContainer,
    EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartDropdownTitle>Your Selection</CartDropdownTitle>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemContainer>
      <Button onClick={() => navigate("/checkout")}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
