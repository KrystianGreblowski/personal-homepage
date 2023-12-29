import { Wrapper, Icon, MainInfo, ExtraInfo } from "./styled";
import { ReactComponent as ErrorIcon } from "./error.svg";
import ErrorButton from "./ErrorButton";

const Error = () => {
  return (
    <Wrapper>
      <Icon>
        <ErrorIcon />
      </Icon>

      <MainInfo>Ooops! Something went wrong...</MainInfo>

      <ExtraInfo>Sorry, failed to load Github projects.</ExtraInfo>

      <ExtraInfo>You can check them directly on Github.</ExtraInfo>

      <ErrorButton url="https://github.com/KrystianGreblowski" />
    </Wrapper>
  );
};

export default Error;
