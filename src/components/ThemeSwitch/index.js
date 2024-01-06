import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, isDarkTheme } from "./themeSlice";
import { ReactComponent as ButtonSlideIcon } from "./button-slide.svg";

const ThemeSwitch = ({ children }) => {
  const darkTheme = useSelector(isDarkTheme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <ButtonSlideIcon />

      <button onClick={toggleThemeHandler}>
        {darkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      {children}
    </>
  );
};

export default ThemeSwitch;
