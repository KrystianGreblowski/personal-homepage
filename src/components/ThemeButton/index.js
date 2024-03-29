import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, isDarkTheme } from "../../theme/themeSlice";
import ToggleAnimation from "./ToggleAnimation";
import { Wrapper, Text, Button } from "./styled";

const ThemeButton = () => {
  const darkTheme = useSelector(isDarkTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <Wrapper>
      <Text>Dark mode {darkTheme ? "on" : "off"}</Text>

      <Button onClick={toggleThemeHandler}>
        <ToggleAnimation />
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
