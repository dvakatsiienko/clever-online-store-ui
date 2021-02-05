/* Core */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: radnika_next;
        src: url('/radnikanext-medium-webfont.woff2');
    }

    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3a3a3a;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        font-family: radnika_next, system-ui;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: var(--black);

        &:hover {
            text-decoration: underline;
        }
    }

    button {
        font-family: radnika_next, system-ui;
    }

    *, *:before, &:after {
        box-sizing: inherit;
    }

`;
