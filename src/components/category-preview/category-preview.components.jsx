import PropTypes from "prop-types";

import ProductCard from "../product-card/product-card.component";
import {
    CategoryPreviewContainer,
    PreviewContainer,
    TitleContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryPreview;
