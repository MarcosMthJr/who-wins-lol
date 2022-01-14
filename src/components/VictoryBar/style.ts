import styled from 'styled-components';
const colors =  {
    purple: '#8D4D89',
    blue: '#4F55BF'
}
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
//[x] mudar a cor com as props

interface VerticalRowProps {
    fighterPosition: 'left' | 'right';
}
export const VerticalRow =  styled.div<VerticalRowProps>`
    width: 1px;
    border: 1px solid ${(props)=> props.fighterPosition === 'left' ? colors.purple : colors.blue };
    height:10rem;
    position: relative;
`;


// TODO: cor da barra vertical, orientação da barra e tamanho da barra
// [x] pegar das props se é bottom: 0; ou top: 0;
// [x] mudar o heigth conforme os votos
// [x] mudar a cor com as props

interface VerticalBarProps {
    fighterPosition: 'left' | 'right';
    barHeight: number;
}

export const VerticalBar = styled.div<VerticalBarProps>`
width: 2.5rem;
height: ${props => props.barHeight}rem;
position: absolute;
left: -20px;
${(props)=> props.fighterPosition === 'left' ? 'bottom' : 'top' }: -1px;
background: ${(props)=> props.fighterPosition === 'left' ? colors.purple : colors.blue };
`;


interface WinTextProps {
    fighterPosition: 'left' | 'right';
}
export const WinText = styled.p<WinTextProps>`
    font-size: 1.4rem;
    color: ${(props)=> props.fighterPosition === 'left' ? colors.purple : colors.blue };
    text-transform: uppercase;
`;