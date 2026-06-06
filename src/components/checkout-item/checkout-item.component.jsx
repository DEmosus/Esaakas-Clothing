import PropTypes from "prop-types";
import { memo } from "react";
import { useDispatch } from "react-redux";

import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "../../store/cart/cart.reducer";
import {
    Arrow,
    CheckoutItemContainer,
    ImageContainer,
    NameOfItem,
    PriceOfItem,
    QuantityOfItem,
    RemoveButton,
    Value,
} from "./checkout-item.styles";

const CheckoutItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} loading="lazy" />
      </ImageContainer>
      <NameOfItem>{name}</NameOfItem>
      <QuantityOfItem>
        <Arrow onClick={() => dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItem))}>
          &#10095;
        </Arrow>
      </QuantityOfItem>
      <PriceOfItem>${price}</PriceOfItem>
      <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
});

CheckoutItem.displayName = "CheckoutItem";

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CheckoutItem;
