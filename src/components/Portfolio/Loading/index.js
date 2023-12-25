import { Wrapper, Text, Icon } from "./styled";
import LoadingAnimation from "./LoadingAnimation";

const Loading = () => {
  return (
    <Wrapper>
      <Text>Please wait, projects are being loaded...</Text>
      <Icon>
        <LoadingAnimation />
      </Icon>
    </Wrapper>
  );
};

export default Loading;
