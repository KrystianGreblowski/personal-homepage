import { nanoid } from "nanoid";
import { ReactComponent as GitHubIcon } from "../../images/github.svg";
import {
  Wrapper,
  Header,
  StyledGitHubIcon,
  Title,
  Description,
  Body,
} from "./styled";
import RepoTile from "./RepoTile";
import { useReposData } from "./useReposData";

const Portfolio = () => {
  const repos = useReposData([]);

  return (
    <Wrapper>
      <Header>
        <StyledGitHubIcon>
          <GitHubIcon />
        </StyledGitHubIcon>

        <Title>Portfolio</Title>

        <Description>My recent projects</Description>
      </Header>

      <Body>
        {repos.map((repo) => (
          <RepoTile
            key={nanoid()}
            title={repo.nameRepo}
            description={repo.descriptionRepo}
            demoLink={repo.demoLink}
            codeLink={repo.codeLink}
          />
        ))}
      </Body>
    </Wrapper>
  );
};

export default Portfolio;
