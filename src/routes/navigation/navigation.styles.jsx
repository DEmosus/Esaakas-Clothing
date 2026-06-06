import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavAccentLine = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold) 30%,
    var(--gold-light) 60%,
    transparent 100%
  );
`;

export const NavigationContainer = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  /* Required: makes this the containing block for the absolutely-positioned
     CartDropdown so it anchors to the nav bar, not the viewport. */
  position: sticky;
  isolation: isolate;
  transition:
    background var(--ease),
    border-color var(--ease);

  @media (max-width: 48rem) {
    height: auto;
    min-height: 4rem;
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: var(--text);
    transition:
      color var(--ease),
      opacity var(--ease);
  }

  a:hover {
    opacity: 0.75;
  }

  svg {
    max-height: 3.2rem;
    width: auto;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  /* CartDropdown positions relative to NavigationContainer, not NavRight */
  position: static;

  @media (max-width: 48rem) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.5rem 0.875rem;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-family: var(--font-body);
  cursor: pointer;
  position: relative;
  transition: color var(--ease);
  white-space: nowrap;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0.875rem;
    right: 0.875rem;
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--ease);
  }

  &:hover {
    color: var(--gold);
    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 48rem) {
    padding: 0.4rem 0.6rem;
    font-size: 0.68rem;
  }
`;
