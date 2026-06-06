import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { ShopPageWrapper } from "../../components/category-preview/category-preview.styles";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <ShopPageWrapper>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </ShopPageWrapper>
  );
};

export default CategoriesPreview;
