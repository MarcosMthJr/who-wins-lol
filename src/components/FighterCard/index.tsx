import { Container } from "./style";
import ekkoImg from '../../assets/modelo1.jpg';

export function FighterCard(){
    return(
        <Container>
                <p className='fighterName'>Ekko</p>
                <p className='fighterVotes'>987 votes</p>
                <img src={ekkoImg} alt="First fighter" />
                <button type='button'>
                    Vote
                </button>
        </Container>
    );
}