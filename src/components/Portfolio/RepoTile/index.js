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
import { demoHandler, codeHandler } from "./handlers";

const RepoTile = ({ title, description, demoLink, codeLink }) => {
  return (
    <TileButton onClick={demoHandler}>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Links>
        <Demo>
          <LinkTitle>Demo:</LinkTitle>

          <DirectLink onClick={() => demoHandler(demoLink)}>
            {demoLink}
          </DirectLink>
        </Demo>

        <Code>
          <LinkTitle>Code:</LinkTitle>

          <DirectLink onClick={(event) => codeHandler(event, codeLink)}>
            {codeLink}
          </DirectLink>
        </Code>
      </Links>
    </TileButton>
  );
};

export default RepoTile;
