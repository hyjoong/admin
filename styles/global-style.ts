import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    } 
    html{ 
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback; 
        -ms-overflow-style: none;
        scrollbar-width: none;
        @media screen and (max-width: 710px) {
            ::-webkit-scrollbar {
                display: none;
            }
        }
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer; 
    } 
`;
