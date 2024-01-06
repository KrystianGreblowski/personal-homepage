import { useSelector } from "react-redux";
import { Wrapper, Icon, MainInfo, ExtraInfo } from "./styled";
import { ReactComponent as ErrorIcon } from "./error.svg";
import { ReactComponent as ErrorIconDM } from "./errorDM.svg";
import ErrorButton from "./ErrorButton";
import { isDarkTheme } from "../../../components/ThemeSwitch/themeSlice";

const Error = () => {
  const darkTheme = useSelector(isDarkTheme);

  return (
    <Wrapper>
      <Icon>{darkTheme ? <ErrorIconDM /> : <ErrorIcon />}</Icon>

      <MainInfo>Ooops! Something went wrong...</MainInfo>

      <ExtraInfo>Sorry, failed to load Github projects.</ExtraInfo>

      <ExtraInfo>You can check them directly on Github.</ExtraInfo>

      <ErrorButton url="https://github.com/KrystianGreblowski" />
    </Wrapper>
  );
};

export default Error;
