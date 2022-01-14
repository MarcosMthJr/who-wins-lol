import styled from 'styled-components';

export const Container = styled.section`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:2rem;
    span{
        font-size: 3rem;
        padding:0;
        margin: -10px 0;
    }
`;

//TODO: cor da linha vertical
//[ ] mudar a cor com as props

export const VerticalRow =  styled.div`
    width: 1px;
    border: 1px solid white;
    height:10rem;
    position: relative;
`;


// TODO: cor da barra vertical, orientação da barra e tamanho da barra
// [ ] pegar das props se é bottom: 0; ou top: 0;
// [ ] mudar o heigth conforme os votos
// [ ] mudar a cor com as props

export const VerticalBar = styled.div`
width: 2.5rem;
height: 6rem;
position: absolute;
left: -20px;
bottom: -1px;
background: var(--purple);
`;

export const WinText = styled.p`
    font-size: 1.4rem;
    color: var(--purple);
    text-transform: uppercase;
`;