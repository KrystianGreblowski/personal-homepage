import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import List from "./components/List";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { GlobalStyles } from "./globalStyles";
import { Container } from "./components/Container";
import { skillsetList } from "./data/skillsetList";
import { learningList } from "./data/learningList";
import { ReactComponent as ToolIcon } from "./images/tool.svg";
import { ReactComponent as RocketIcon } from "./images/rocket.svg";
import ThemeSwitch from "./components/ThemeSwitch";
import { isDarkTheme } from "./components/ThemeSwitch/themeSlice";

import { lightTheme, darkTheme } from "./theme";

function App() {
  const darkMode = useSelector(isDarkTheme);

  return (
    <ThemeSwitch>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </ThemeSwitch>
  );
}

export default App;
