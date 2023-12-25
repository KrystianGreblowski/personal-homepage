import { Wrapper, Text, Animation } from "./styled";
import LoadingAnimation from "./LoadingAnimation";

const Loading = () => {
  return (
    <Wrapper>
      <Text>Please wait, projects are being loaded...</Text>

      <Animation>
        <LoadingAnimation />
      </Animation>
    </Wrapper>
  );
};

export default Loading;
