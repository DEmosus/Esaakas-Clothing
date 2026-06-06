import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    /* LIGHT MODE — warm ivory, warm black, champagne gold */
    --bg:           #F9F6F0;
    --bg-secondary: #F2EDE4;
    --bg-card:      #FFFFFF;
    --bg-overlay:   rgba(249, 246, 240, 0.92);
    --text:         #1C1712;
    --text-sub:     #4A4035;
    --text-muted:   #8A7D6E;
    --gold:         #B8972A;
    --gold-light:   #D4AF55;
    --gold-pale:    #F0E4BE;
    --gold-muted:   #EDE0C0;
    --border:       #E2D9CC;
    --border-strong:#C4B49A;
    --shadow-sm:    0 1px 4px rgba(28,23,18,0.07);
    --shadow-md:    0 4px 20px rgba(28,23,18,0.10);
    --shadow-lg:    0 12px 40px rgba(28,23,18,0.14);
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'Jost', sans-serif;
    --ease:         0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="dark"] {
    /* DARK MODE — near-black, deep warm tones, burnished gold */
    --bg:           #131008;
    --bg-secondary: #1C180E;
    --bg-card:      #221E12;
    --bg-overlay:   rgba(19, 16, 8, 0.92);
    --text:         #F0EAE0;
    --text-sub:     #C8BAA6;
    --text-muted:   #7A6E5E;
    --gold:         #C9A84C;
    --gold-light:   #DFC070;
    --gold-pale:    #2A2210;
    --gold-muted:   #2E250E;
    --border:       #2E2818;
    --border-strong:#4A3E28;
    --shadow-sm:    0 1px 4px rgba(0,0,0,0.35);
    --shadow-md:    0 4px 20px rgba(0,0,0,0.45);
    --shadow-lg:    0 12px 40px rgba(0,0,0,0.55);
  }

  *, *::before, *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    transition: background var(--ease), color var(--ease);
  }

  a { color: inherit; text-decoration: none; }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-display);
    letter-spacing: 0.01em;
    margin: 0;
  }

  img { display: block; max-width: 100%; }

  button { font-family: var(--font-body); }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: var(--bg-secondary); }
  ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--gold); }
`;
