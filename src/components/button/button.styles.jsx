import styled, { keyframes } from "styled-components";

const spin = keyframes`to { transform: rotate(360deg); }`;

export const BaseButton = styled.button`
  min-width: 9rem;
  height: 2.9rem;
  padding: 0 1.75rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-family: var(--font-body);
  background: var(--text);
  color: var(--bg);
  border: 1px solid var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--ease),
    color var(--ease),
    border-color var(--ease),
    transform var(--ease),
    box-shadow var(--ease);

  &:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--bg);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background: #4285f4;
  border-color: #4285f4;
  color: #fff;
  &:hover {
    background: #357ae8;
    border-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-strong);

  &:hover {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--bg);
  }
`;

export const ButtonSpinner = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;
