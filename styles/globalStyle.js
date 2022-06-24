import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: "#F5F5F5";
        padding: 2rem;
        width: 100%;
        font-family: 'Mier', "MurMure", sans-serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'MurMure';
        color: "#0A0A0A";
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
        color: "#0A0A0A";
    };

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        display: block;
    }
    
`;

export default GlobalStyle;
