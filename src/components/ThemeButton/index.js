import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "../../themeSlice";
import ToggleAnimation from "./ToggleAnimation";
import { Wrapper, Text, Button } from "./styled";
import { isDarkTheme } from "../../themeSlice";

const ThemeButton = () => {
  const darkTheme = useSelector(isDarkTheme);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper>
      <Text>{darkTheme ? "Dark mode on" : "Dark mode off"}</Text>
      <Button onClick={toggleThemeHandler}>
        <ToggleAnimation isClicked={isClicked} />
      </Button>
    </Wrapper>
  );
};

export default ThemeButton;
