import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../themeSlice";
import ToggleAnimation from "./ToggleAnimation";
import { Wrapper, Text, Button } from "./styled";
import { isDarkTheme } from "../../themeSlice";

const ThemeButton = () => {
  const darkTheme = useSelector(isDarkTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Wrapper $darkTheme={darkTheme}>
      <Text $mobile>{darkTheme ? "Dark mode on" : "Dark mode off"}</Text>
      <Button onClick={toggleThemeHandler}>
        <ToggleAnimation />
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
