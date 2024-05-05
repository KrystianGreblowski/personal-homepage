import {
  TileButton,
  Title,
  Description,
  Links,
  Demo,
  Code,
  LinkTitle,
  DirectLink,
} from "./styled";

const RepoTile = ({ title, description, demoLink, codeLink }) => {
  return (
    <TileButton>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Links>
        {demoLink && (
          <Demo>
            <LinkTitle>Demo:</LinkTitle>

            <DirectLink href={demoLink} target="_blank">
              {demoLink}
            </DirectLink>
          </Demo>
        )}
        {codeLink && (
          <Code>
            <LinkTitle>Code:</LinkTitle>

            <DirectLink href={codeLink} target="_blank">
              {codeLink}
            </DirectLink>
          </Code>
        )}
      </Links>
    </TileButton>
  );
};

export default RepoTile;
