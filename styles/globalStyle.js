import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: none;
        text-decoration: none;
    }

    body {
        background: ${(props) => props.theme.background};
        padding: 2rem;
        width: 100%;
        font-family: 'Mier', "MurMure", sans-serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'MurMure';
        color: ${(props) => props.theme.text};
        text-transform: uppercase;
    }

    h1 {
        font-size: 12rem;
    }

    h2 {
        font-size: 10rem;
    }

    h3 {
        font-size: 8rem;
    }

    h4 {
        font-size: 6rem;
    }

    h5 {
        font-size: 4rem;
    }

    h6 {
        font-size: 3rem;
    }

    p {
        font-size: 20px;
        font-family: 'Mier';
        ${(props) => props.theme.text};
    };

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        display: block;
    }
    
`;
