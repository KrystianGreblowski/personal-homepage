import { Wrapper, Text, Icon } from "./styled";
import { ReactComponent as LoadingIcon } from "../../../images/loading.svg";

const Loading = () => {
  return (
    <Wrapper>
      <Text>Please wait, projects are being loaded...</Text>
      <Icon>
        <LoadingIcon />
      </Icon>
    </Wrapper>
  );
};

export default Loading;
