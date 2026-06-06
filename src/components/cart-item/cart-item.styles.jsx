import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
  min-width: 0;
`;

export const NameContainer = styled.span`
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceContainer = styled.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--gold);
  font-weight: 500;
`;
