import DirectoryItem from "../directory-item/directory-item.component";
import {
    CategoriesContainer,
    PageWrapper,
    SectionEyebrow,
    SectionTitle,
} from "./categories-items.styles";

const CATEGORIES = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.postimg.cc/mkFXQGQh/hats.avif",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.postimg.cc/wxygWy2R/jackets.avif",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.postimg.cc/J4jmLf91/sneakers.avif",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.postimg.cc/MTQM8WVW/women-1.avif",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.postimg.cc/3x7hJLT2/men.avif",
    route: "shop/mens",
  },
];

const CategoriesItems = () => (
  <PageWrapper>
    <SectionEyebrow>Collections</SectionEyebrow>
    <SectionTitle>
      Curated <strong>Essentials</strong>
    </SectionTitle>
    <CategoriesContainer>
      {CATEGORIES.map((c) => (
        <DirectoryItem
          key={c.id}
          title={c.title}
          imageUrl={c.imageUrl}
          route={c.route}
        />
      ))}
    </CategoriesContainer>
  </PageWrapper>
);

export default CategoriesItems;
