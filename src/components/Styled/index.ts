import styled, {createGlobalStyle, css} from 'styled-components';

type GlobalProps = {
  isLight: boolean,
}

export const Global = createGlobalStyle<GlobalProps>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }

  :root {
    --input: hsl(0, 0%, 52%);
    --appBG: ${({isLight}) => isLight ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
    --cardBG: ${({isLight}) => isLight ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
    --cardText: ${({isLight}) => isLight ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
  }
`;

export const maxCenterMixing = css`
  width: min(95%, 1200px);
  margin: 0 auto;
`;

export const themeColorsMixing = css`
  color: var(--cardText);
  background: var(--cardBG);
  transition: 0.5s;
`;

export const shadowMixing = css`
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, .5);
`;

export const Container = styled.main`
  background: var(--appBG);
  padding: 1em 0;
  box-shadow: 0 7px 9px -7px rgba(0, 0, 0, .5) inset;
  min-height: 100vh;
`;
 
export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: var(appBG);
    padding-bottom: 48px;
    button {
      cursor: pointer;
    }
  }
`