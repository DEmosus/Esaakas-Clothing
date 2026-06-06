import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  width: 92vw;
  max-width: 1000px;
  margin: 4rem auto;

  @media (max-width: 48rem) {
    width: 95vw;
    margin: 2rem auto;
  }
`;

export const AuthEyebrow = styled.p`
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 0.5rem 0;
`;

export const AuthPageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 300;
  font-style: italic;
  color: var(--text);
  margin: 0 0 3rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);

  strong {
    font-weight: 700;
    font-style: normal;
  }

  @media (max-width: 48rem) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const AuthenticationContainer = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const Divider = styled.div`
  width: 1px;
  align-self: stretch;
  background: var(--border);
  flex-shrink: 0;

  @media (max-width: 48rem) {
    width: 100%;
    height: 1px;
    align-self: auto;
  }
`;
