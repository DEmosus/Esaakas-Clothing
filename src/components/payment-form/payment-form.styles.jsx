import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  margin-top: 2.5rem;
  padding: 2rem;
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition:
    background var(--ease),
    border-color var(--ease);

  h2 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 400;
    font-style: italic;
    color: var(--text);
    margin: 0 0 1.5rem 0;

    &::after {
      content: "";
      display: block;
      width: 2.5rem;
      height: 1px;
      background: var(--gold);
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 1.25rem;
    margin-top: 1.5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardElementWrapper = styled.div`
  padding: 0.875rem 1rem;
  border: 1px solid var(--border-strong);
  /* Use explicit background so Stripe input text contrasts correctly */
  background: ${({ $isDark }) => ($isDark ? "#221E12" : "#FFFFFF")};
  transition: border-color var(--ease);
  border-radius: 1px;

  &:focus-within {
    border-color: var(--gold);
    box-shadow: 0 0 0 2px
      ${({ $isDark }) =>
        $isDark ? "rgba(201,168,76,0.15)" : "rgba(184,151,42,0.12)"};
  }
`;

export const PaymentButton = styled(Button)`
  align-self: flex-end;

  @media (max-width: 48rem) {
    width: 100%;
    align-self: stretch;
  }
`;

export const DevNote = styled.div`
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--text-muted);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  padding: 0.625rem 0.875rem;
  line-height: 1.5;

  code {
    font-family: "Courier New", monospace;
    font-size: 0.75rem;
    background: var(--border);
    padding: 0.1em 0.35em;
    border-radius: 2px;
    color: var(--text);
  }
`;
