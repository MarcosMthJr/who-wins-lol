import { FighterCard } from "../FighterCard";
import { VictoryBar } from "../VictoryBar";
import { Container } from "./style";

export function Main() {
    return(
        <Container>
            <FighterCard />
            <VictoryBar />
            <FighterCard />
        </Container>
    );
}