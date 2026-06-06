import styled, { keyframes } from "styled-components";

const spin = keyframes`to { transform: rotate(360deg); }`;

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const SpinnerContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 1.5px solid var(--border);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

export const SpinnerLabel = styled.p`
  font-family: var(--font-body);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0;
`;
