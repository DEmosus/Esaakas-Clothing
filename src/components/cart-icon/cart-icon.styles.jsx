import styled from "styled-components";
import ShoppingBagIcon from "../icons/shopping-bag-icon.component";

export const CartIconContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  flex-shrink: 0;
  color: var(--text);
  transition:
    color var(--ease),
    background var(--ease);

  &:hover {
    background: var(--gold-pale);
    color: var(--gold);
  }
`;

export const StyledShoppingBagIcon = styled(ShoppingBagIcon)`
  display: block;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.55rem;
  font-weight: 700;
  line-height: 1;
  color: var(--gold);
  font-family: var(--font-body);
  letter-spacing: 0;
  pointer-events: none;
  white-space: nowrap;
`;
