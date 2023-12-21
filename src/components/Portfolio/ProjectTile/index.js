import {
  Wrapper,
  Title,
  Description,
  Links,
  Demo,
  Code,
  LinkTitle,
  DirectLink,
} from "./styled";

const ProjectTile = () => {
  return (
    <Wrapper>
      <Title>Example title 1</Title>

      <Description>
        Project description, e.g. website where you can search for favourite
        movies and people. Project description, e.g. website where you can
        search.
      </Description>

      <Links>
        <Demo>
          <LinkTitle>Demo:</LinkTitle>

          <DirectLink href="https://link.demo.com">
            https://link.demo.com
          </DirectLink>
        </Demo>

        <Code>
          <LinkTitle $Code>Code:</LinkTitle>

          <DirectLink href="https://link.code.com">
            https://link.code.com
          </DirectLink>
        </Code>
      </Links>
    </Wrapper>
  );
};

export default ProjectTile;
