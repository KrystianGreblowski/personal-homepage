import { ReactComponent as GithubIcon } from "../../images/github.svg";
import {
  Wrapper,
  Header,
  StyledGithubIcon,
  Title,
  Description,
} from "./styled";

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
    </Wrapper>
  );
};

export default Portfolio;
