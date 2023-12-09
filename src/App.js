import { Container } from "./components/Container";
import { Tile } from "./components/Tile";
import List from "./components/List";

function App() {
  return (
    <Container>
      <Tile>
        <List />
      </Tile>
    </Container>
  );
}

export default App;
