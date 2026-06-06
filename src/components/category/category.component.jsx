import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryContainer,
  CategoryPageWrapper,
  CategoryTitle,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const products = categoriesMap[category] ?? [];

  return (
    <CategoryPageWrapper>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </CategoryPageWrapper>
  );
};

export default Category;
