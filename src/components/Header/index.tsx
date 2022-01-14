import logoWhoWinsImg from "../../assets/who-wins-logo.png";
import { Containter, Content } from './style';

export function Header() {
    return (
        <Containter>
            <Content>
                <div className="secondsFinishVotingContainer">
                    <p className="numbersHeader">60</p>
                    <p>seconds to<br />finish voting</p>
                </div>

                <img src={logoWhoWinsImg} alt="Logo Who Wins" />

                <div className="totalVotesContainer">
                    <p className="numbersHeader">0</p>
                    <p>Total votes</p>
                </div>
            </Content>
        </Containter>
    );
}