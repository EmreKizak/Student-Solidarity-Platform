import { createGlobalStyle } from "styled-components";

const GlobalStyledProvider = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        background-color: rgba(52, 85, 119, 0.8) ;
        color: var(--font-color);
    }
    
    :root{
        --main-bg: ${(props) => props.theme ? "rgba(52, 85, 119, 0.75)" : "white"};
        --font-color: ${(props) =>(props.theme ? "white" : "black")};
        --form-color: ${(props) =>(props.theme ? "#BEE5BF" : "#BEE5BF")};
    }
`;

export default GlobalStyledProvider;