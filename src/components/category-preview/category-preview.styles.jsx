import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopPageWrapper = styled.div`
  width: 92vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 0 4rem;

  @media (max-width: 48rem) {
    width: 95vw;
    padding: 1.5rem 0 2rem;
  }
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;

  @media (max-width: 48rem) {
    margin-bottom: 2.5rem;
  }
`;

export const TitleContainer = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.25rem;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.01em;
  transition: color var(--ease);

  &::after {
    content: "→";
    font-family: var(--font-body);
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gold);
    transition: transform var(--ease);
  }

  &:hover {
    color: var(--gold);
  }
  &:hover::after {
    transform: translateX(5px);
  }

  @media (max-width: 48rem) {
    font-size: 1.4rem;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`;
