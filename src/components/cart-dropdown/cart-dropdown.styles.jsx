import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 19rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-top: 2px solid var(--gold);
  box-shadow: var(--shadow-lg);
  /* Anchor below the nav bar, flush to the right edge */
  top: calc(100% + 2px);
  right: 0;
  z-index: 200;
  transition: background var(--ease);

  /* Prevent the dropdown from overflowing off screen on small viewports */
  max-width: calc(100vw - 2rem);

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: 1.25rem;
    width: 100%;
  }

  @media (max-width: 48rem) {
    /* On mobile: stretch edge-to-edge with margin */
    width: calc(100vw - 2rem);
    right: 0;
    left: auto;
  }
`;

export const CartDropdownTitle = styled.p`
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1rem 0;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid var(--border);
`;

export const CartItemContainer = styled.div`
  max-height: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-strong);
    border-radius: 2px;
  }
`;

export const EmptyMessage = styled.span`
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1rem;
  color: var(--text-muted);
  margin: 2rem auto;
  display: block;
  text-align: center;
`;
