import { Wrapper, Text, LoadingAnimation } from "./styled";

const Loading = () => (
  <Wrapper>
    <Text>Please wait, projects are being loaded…</Text>
    <LoadingAnimation />
  </Wrapper>
);

export default Loading;
