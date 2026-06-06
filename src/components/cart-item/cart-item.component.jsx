import PropTypes from "prop-types";
import { memo } from "react";

import {
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer,
    PriceContainer,
} from "./cart-item.styles";

const CartItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} loading="lazy" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          {quantity} × ${price}
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
});

CartItem.displayName = "CartItem";

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
