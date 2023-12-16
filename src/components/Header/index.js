import myPhoto from "../../images/header-image-test.png";
import {
  Wrapper,
  HeaderImage,
  HeaderContent,
  Caption,
  Name,
  AboutMe,
  StyledButtonIcon,
  Button,
} from "./styled";
import { ReactComponent as ButtonIcon } from "../../images/message.svg";

const Header = () => {
  return (
    <Wrapper>
      <HeaderImage src={myPhoto} alt="Krystian Gręblowski" />
      <HeaderContent>
        <Caption>This is</Caption>

        <Name>Krystian Gręblowski</Name>

        <AboutMe>
          👨🏻💻 I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </AboutMe>

        <Button>
          <StyledButtonIcon>
            <ButtonIcon />
          </StyledButtonIcon>
          Hire Me
        </Button>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
