import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  flex-basis: 30%;
  flex-grow: 1;
  height: 22rem;
  margin: 0 0.5rem 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--border);
  transition:
    border-color var(--ease),
    box-shadow var(--ease);

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: var(--gold);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 48rem) {
    flex-basis: 100%;
    height: 16rem;
    margin: 0 0 1rem 0;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: block;

  ${DirectoryItemContainer}:hover & {
    transform: scale(1.07);
  }
`;

export const DirectoryBodyContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(0deg, rgba(19, 16, 8, 0.78) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  transition: padding var(--ease);

  ${DirectoryItemContainer}:hover & {
    padding-bottom: 1.75rem;
  }

  h2 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    color: #f0eae0;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  p {
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-light);
    margin: 0;
  }
`;
