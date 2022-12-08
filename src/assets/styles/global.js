import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Open Sans";
    }

    input {
        outline: none;
    }

    body {
        background-color: #FFFFFF;
        color: #FFFFFF;
    }

    a {
        text-decoration: none;
    }
    
    html {
        font-size: 62.5%;
    }
`