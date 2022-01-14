import { Container, VerticalBar, VerticalRow, WinText } from "./style";

export function VictoryBar(){
    return (
        <Container>
            <WinText fighterPosition="left">
                Win
            </WinText>
            <VerticalRow fighterPosition="left">
                <VerticalBar fighterPosition="left" barHeight={8}/>
            </VerticalRow>

            <span>Vs</span>

            <VerticalRow fighterPosition="right">
                <VerticalBar fighterPosition="right" barHeight={2}/>
            </VerticalRow>
            <WinText fighterPosition="right">
                Win
            </WinText>
        </Container>
    );
}