import styled, { css } from "styled-components";

const shrunk = css`
  top: -1.1rem;
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  color: var(--gold);
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 2.25rem 0;

  input[type="password"] {
    letter-spacing: 0.25em;
  }

  @media (max-width: 48rem) {
    margin: 1.75rem 0;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  color: var(--text);
  font-size: 1rem;
  font-family: var(--font-body);
  padding: 0.5rem 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--border-strong);
  outline: none;
  transition: border-color var(--ease);

  &:focus {
    border-color: var(--gold);
  }
  &:focus ~ label {
    ${shrunk}
  }
`;

export const FormInputLabel = styled.label`
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: var(--font-body);
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0.5rem;
  transition:
    top 0.2s ease,
    font-size 0.2s ease,
    color 0.2s ease,
    letter-spacing 0.2s ease;
  letter-spacing: 0.04em;

  &.shrink {
    ${shrunk}
  }
`;
