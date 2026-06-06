import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 6rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  gap: 0.5rem;
`;

export const ImageContainer = styled.div`
  width: 20%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 5rem;
    object-fit: cover;
  }

  @media (max-width: 48rem) {
    width: 25%;
    img {
      height: 4rem;
    }
  }
`;

export const NameOfItem = styled.span`
  width: 23%;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1rem;
  color: var(--text);

  @media (max-width: 48rem) {
    width: 30%;
    font-size: 0.9rem;
  }
`;

export const QuantityOfItem = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const PriceOfItem = styled.span`
  width: 23%;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gold);
`;

export const Arrow = styled.div`
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.75rem;
  transition: color var(--ease);
  user-select: none;
  &:hover {
    color: var(--gold);
  }
`;

export const Value = styled.span`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  min-width: 1.5rem;
  text-align: center;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.7rem;
  transition: color var(--ease);
  &:hover {
    color: #c0392b;
  }
`;
