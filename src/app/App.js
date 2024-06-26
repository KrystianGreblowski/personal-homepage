import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import ThemeButton from "../components/ThemeButton";
import Header from "../components/Header";
import List from "../components/List";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { GlobalStyles } from "./GlobalStyles";
import { skillsetList } from "../data/skillsetList";
import { learningList } from "../data/learningList";
import { ReactComponent as ToolIcon } from "../images/tools.svg";
import { ReactComponent as RocketIcon } from "../images/rocket.svg";
import { isDarkTheme } from "../theme/themeSlice";
import { lightTheme, darkTheme } from "../theme/theme";

function App() {
  const darkMode = useSelector(isDarkTheme);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      <ThemeButton />

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
    </ThemeProvider>
  );
}

export default App;
