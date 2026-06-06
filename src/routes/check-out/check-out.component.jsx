import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";
import {
    CheckoutContainer,
    CheckoutHeader,
    CheckoutPageTitle,
    HeaderBlock,
    Total,
} from "./check-out.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutPageTitle>
        Your <strong>Checkout</strong>
      </CheckoutPageTitle>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <Total>
        <span>
          Total: <em>${cartTotal}</em>
        </span>
      </Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
