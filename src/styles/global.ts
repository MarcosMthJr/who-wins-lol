import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #222222;
        --purple: #8D4D89;
        --blue: #4F55BF;
        --text: #FFFFFF;
    }

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        font-family: 'Saira Stencil One', cursive;
        color: var(--text);
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Poppins', sans-serif;
        font-family: 'Saira Stencil One', cursive;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursos: not-allowed;
    }
`;