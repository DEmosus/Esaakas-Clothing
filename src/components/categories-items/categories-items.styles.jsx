import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 92vw;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0 4rem;

  @media (max-width: 48rem) {
    width: 95vw;
    padding: 2rem 0;
  }
`;

export const SectionEyebrow = styled.p`
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 0.5rem 0;
`;

export const SectionTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--text);
  margin: 0 0 2.5rem 0;
  letter-spacing: -0.01em;
  line-height: 1.1;

  strong {
    font-weight: 700;
    font-style: normal;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;
