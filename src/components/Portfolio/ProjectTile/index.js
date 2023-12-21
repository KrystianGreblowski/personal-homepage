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

const ProjectTile = ({ title, description, demoLink, codeLink }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Links>
        <Demo>
          <LinkTitle>Demo:</LinkTitle>

          <DirectLink href={demoLink}>{demoLink}</DirectLink>
        </Demo>

        <Code>
          <LinkTitle $Code>Code:</LinkTitle>

          <DirectLink href={codeLink}>{codeLink}</DirectLink>
        </Code>
      </Links>
    </Wrapper>
  );
};

export default ProjectTile;
