import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  text: "#0A0A0A",
  background: "#F5F5F5",
  accent: "#ff006e",
  cursor: "#fff",
  pastel: "#a594f9",
  blur: "hsl(0 100% 0% /0.1)",
};

export const darkTheme = {
  text: "#F5F5F5",
  background: "#0A0A0A",
  accent: "#04e762",
  //   accent: "#fb5607",
  cursor: "#fff",
  //   cursor: "#000",
  pastel: "#4361ee",
  blur: "hsl(0 0% 100% /0.1)",
};

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
        padding: 3rem;
        background-color:${(props) => props.theme.background};
        font-family: 'Mier', "MurMure", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1); */
        /* display: flex; */
      
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
        font-family: 'Murmure';

    }

    h3 {
        font-size: 8rem;
        font-family: 'Murmure';
    }

    h4 {
        font-size: 6rem;
        font-family: 'Mier';
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
