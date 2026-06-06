import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition:
    border-color var(--ease),
    box-shadow var(--ease),
    transform var(--ease);

  &:hover {
    border-color: var(--gold);
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.05);
  }

  button {
    position: absolute;
    bottom: 3.6rem;
    left: 0.875rem;
    right: 0.875rem;
    width: calc(100% - 1.75rem);
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity var(--ease),
      transform var(--ease);
  }

  &:hover button {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 48rem) {
    &:hover {
      transform: none;
    }
    button {
      position: static;
      opacity: 1;
      transform: none;
      width: calc(100% - 1rem);
      margin: 0 0.5rem 0.5rem;
    }
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 55%,
      rgba(19, 16, 8, 0.22) 100%
    );
    opacity: 0;
    transition: opacity var(--ease);
  }

  ${ProductCardContainer}:hover &::after {
    opacity: 1;
  }
`;

export const Footer = styled.div`
  padding: 0.7rem 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid var(--border);
  background: var(--bg-card);
  transition: background var(--ease);
`;

export const Name = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  letter-spacing: 0.01em;
  font-style: italic;
`;

export const Price = styled.span`
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gold);
  letter-spacing: 0.06em;
`;
