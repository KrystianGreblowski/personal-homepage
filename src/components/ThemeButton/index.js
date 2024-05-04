import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, isDarkTheme } from "../../theme/themeSlice";
import { Wrapper, Text, Button, ToggleCircle, ToggleIcon } from "./styled";

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
        <ToggleCircle $darkTheme={darkTheme}>
          <ToggleIcon />
        </ToggleCircle>
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
