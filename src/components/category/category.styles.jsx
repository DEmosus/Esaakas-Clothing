import styled from "styled-components";

export const CategoryPageWrapper = styled.div`
  width: 92vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2.5rem 0 4rem;

  @media (max-width: 48rem) {
    width: 95vw;
    padding: 1.5rem 0 2rem;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 300;
  font-style: italic;
  color: var(--text);
  margin-bottom: 1.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 48rem) {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
  }
`;
