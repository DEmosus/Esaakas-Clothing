import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { BUTTON_TYPES_CLASSES } from "../button/button-classes";
import Button from "../button/button.component";
import {
  Footer,
  ImgWrap,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  return (
    <ProductCardContainer>
      <ImgWrap>
        <img src={imageUrl} alt={name} loading="lazy" />
      </ImgWrap>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={() => dispatch(addItemToCart(product))}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
