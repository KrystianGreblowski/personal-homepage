import { ReactComponent as GithubIcon } from "../../images/github.svg";
import {
  Wrapper,
  Header,
  StyledGithubIcon,
  Title,
  Description,
  Body,
} from "./styled";
import ProjectTile from "./ProjectTile";

const Portfolio = () => {
  return (
    <Wrapper>
      <Header>
        <StyledGithubIcon>
          <GithubIcon />
        </StyledGithubIcon>

        <Title>Portfolio</Title>

        <Description>My recent projects</Description>
      </Header>

      <Body>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </Body>
    </Wrapper>
  );
};

export default Portfolio;
