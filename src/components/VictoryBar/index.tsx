import { Container, VerticalBar, VerticalRow, WinText } from "./style";

export function VictoryBar() {
    return (
        <Container>
            <WinText>
                Win
            </WinText>
            <VerticalRow>
                <VerticalBar />
            </VerticalRow>

            <span>Vs</span>

            <VerticalRow>
                <VerticalBar />
            </VerticalRow>
            <WinText>
                Win
            </WinText>
        </Container>
    );
}