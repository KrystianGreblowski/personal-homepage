import { nanoid } from "nanoid";
import { ReactComponent as GitHubIcon } from "../../images/github.svg";
import {
  Wrapper,
  Header,
  StyledGitHubIcon,
  Title,
  Description,
  Error,
  Body,
} from "./styled";
import RepoTile from "./RepoTile";
import Loading from "./Loading";
import { useReposData } from "./useReposData";

const Portfolio = () => {
  const { reposSorted, reposState } = useReposData();

  return (
    <Wrapper>
      <Header>
        <StyledGitHubIcon>
          <GitHubIcon />
        </StyledGitHubIcon>

        <Title>Portfolio</Title>

        <Description>My recent projects</Description>
      </Header>

      <Body $loading={reposState === "loading"}>
        {reposState === "loading" ? (
          <Loading />
        ) : reposState === "done" ? (
          reposSorted.map((repo) => (
            <RepoTile
              key={nanoid()}
              title={repo.nameRepo}
              description={repo.descriptionRepo}
              demoLink={repo.demoLink}
              codeLink={repo.codeLink}
            />
          ))
        ) : (
          <Error>Error</Error>
        )}
      </Body>
    </Wrapper>
  );
};

export default Portfolio;
