import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
       
        padding:0;
        margin:0;
    }

    * {
        margin: 0;
        padding: 0;
        cursor:none;
    }

    body {
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color:${(props) => props.theme.background};
        font-family: 'Mier', "MurMure", "Manrope", sans-serif;
        display: flex;
        flex-direction: column;  
    }

    h1,h2,h3,h4,h5,h6 {
        color:  ${(props) => props.theme.text};
    }

    h1 {
        font-size: 12rem;
        font-family: 'Murmure';

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
        display: block;
       
    }

    button {
        font-family: inherit;
        border:0;
        padding:0;
        margin:0;
    }
    
`;
