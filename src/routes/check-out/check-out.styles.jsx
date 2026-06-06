import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 62%;
  max-width: 860px;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  margin: 2.5rem auto;
  padding: 0;

  @media (max-width: 48rem) {
    width: 95%;
    margin: 1.5rem auto;
  }
`;

export const CheckoutPageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 300;
  font-style: italic;
  color: var(--text);
  margin: 0 0 2rem 0;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);

  strong {
    font-weight: 700;
    font-style: normal;
    color: var(--gold);
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0 0 0.75rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  margin-bottom: 0.25rem;
`;

export const HeaderBlock = styled.div`
  width: 23%;
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);

  &:last-child {
    width: 8%;
    text-align: center;
  }

  span {
    display: none;
  }

  &:nth-child(1)::after {
    content: "Prod.";
    display: block;
  }
  &:nth-child(2)::after {
    content: "Desc.";
    display: block;
  }
  &:nth-child(3)::after {
    content: "Qty";
    display: block;
  }
  &:nth-child(4)::after {
    content: "$";
    display: block;
  }
  &:nth-child(5)::after {
    content: "Del.";
    display: block;
    text-align: center;
  }

  @media (min-width: 48rem) {
    span {
      display: inline;
    }
    &::after {
      display: none !important;
    }
  }
`;

export const Total = styled.div`
  margin-top: 2rem;
  text-align: right;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);

  span {
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--text);

    em {
      font-style: normal;
      color: var(--gold);
    }
  }

  @media (max-width: 48rem) {
    span {
      font-size: 1.4rem;
    }
  }
`;
