import styled from "styled-components";

export const Container =  styled.section`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .fighterName{
        background: var(--purple);
        width: 100%;
        padding: 1rem;
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .fighterVotes{
        font-size: 1.5rem;
    }

    img{
        width: 100%;
        max-width: 260px;
        height: auto;
    }

    button{
        background: var(--purple);
        width: 100%;
        max-width: 260px;
        color: var(--text);
        border: 0;
        font-size: 2.5rem;
        margin-top: 1rem;
        text-transform: uppercase;
        transition: filter .2s linear;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;

