import { ReactComponent as GitHubIcon } from "../../images/github.svg";
import {
  Wrapper,
  Header,
  StyledGitHubIcon,
  Title,
  Description,
  Body,
} from "./styled";
import ProjectTile from "./ProjectTile";

const Portfolio = () => {
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
        <ProjectTile
          title="Example 1"
          description="Decription of project 1"
          demoLink="https://link.demo1.com"
          codeLink="https://link.code1.com"
        />

        <ProjectTile
          title="Example 2"
          description="Decription of project 2"
          demoLink="https://link.demo2.com"
          codeLink="https://link.code2.com"
        />

        <ProjectTile
          title="Example 3"
          description="Decription of project 3"
          demoLink="https://link.demo3.com"
          codeLink="https://link.code3.com"
        />

        <ProjectTile
          title="Example 4"
          description="Decription of project 4"
          demoLink="https://link.demo4.com"
          codeLink="https://link.code4.com"
        />
      </Body>
    </Wrapper>
  );
};

export default Portfolio;
