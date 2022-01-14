import styled from 'styled-components';

export const Containter = styled.header`
    margin: 0 auto;
    margin-top: 0.5rem;
    max-width: 1220px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .secondsFinishVotingContainer{
        line-height:50px;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


        p ~ p{
            font-size: 2rem;
            text-align: center;
        }
    }

    img {
        max-width:300px;
        max-height:250px;
        width: auto;
        height: auto;
    }

    .totalVotesContainer{
        line-height:50px;
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p ~ p{
            font-size: 2rem;
            text-align: center;
        }

    }
    .numbersHeader{
        font-size: 4rem;
    }

`;
