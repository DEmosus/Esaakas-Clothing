import styled, { keyframes } from "styled-components";
import { useTheme } from "../../contexts/theme.context";

const pop = keyframes`
  0%   { transform: scale(0.7) rotate(-30deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg);     opacity: 1; }
`;

const Btn = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: var(--bg-secondary);
  color: var(--text-sub);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    border-color var(--ease),
    background var(--ease),
    transform var(--ease);

  &:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: scale(1.08);
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
    animation: ${pop} 0.35s ease both;
  }
`;

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <Btn onClick={toggleTheme} aria-label="Toggle dark/light mode">
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Btn>
  );
};

export default ThemeToggle;
