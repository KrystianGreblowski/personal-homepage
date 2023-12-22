import List from "./components/List";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { Container } from "./components/Container";
import { skillsetList } from "./data/skillsetList";
import { learningList } from "./data/learningList";
import { ReactComponent as ToolIcon } from "./images/tool.svg";
import { ReactComponent as RocketIcon } from "./images/rocket.svg";

function App() {
  return (
    <Container>
      <Header />

      <List
        titleText={"My skillset includes"}
        titleIcon={<ToolIcon />}
        listItems={skillsetList}
      />

      <List
        titleText={"What I want to learn next"}
        titleIcon={<RocketIcon />}
        listItems={learningList}
      />

      <Portfolio />

      <Footer />
    </Container>
  );
}

export default App;
