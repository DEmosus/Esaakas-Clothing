import styled from "styled-components";

export const SignInContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text);
    margin: 0 0 0.4rem 0;
  }

  > span {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-family: var(--font-body);
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;
