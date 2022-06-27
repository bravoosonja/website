import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  text: "#0A0A0A",
  background: "#F5F5F5",
  accent: "#ff006e",
  secondary: "#35ff69",
};

export const darkTheme = {
  text: "#F5F5F5",
  background: "#0A0A0A",
  accent: "#35ff69",
  secondary: "#ff006e",
};

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        padding:0;
        margin:0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background:${(props) => props.theme.background};
        padding: 2rem;
        margin:0;
        width: 100%;
        font-family: 'Mier', "MurMure", sans-serif;
        transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'MurMure';
        color:  ${(props) => props.theme.text};
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
        color: ${(props) => props.theme.text};
       
       
    }

    ul,li {
        list-style: none;
        color: ${(props) => props.theme.text};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.text};

        &:hover {
            color: ${(props) => props.theme.secondary};
        }      
    }

    img {
        width: 100%;
        display: block;
       
    }

    button {
        font-size:100%;
        font-family: inherit;
        border:0;
        padding:0;
    }
    
`;
