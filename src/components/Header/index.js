import myPhoto from "../../images/header-image-test.png";
import {
  Wrapper,
  HeaderImage,
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
      <div>
        <Caption>This is</Caption>
        <Name>Krystian Greblowski</Name>
        <AboutMe>
          👨🏻💻 I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </AboutMe>

        <Button>
          <StyledButtonIcon>
            <ButtonIcon />
          </StyledButtonIcon>
          Hire me
        </Button>
      </div>
    </Wrapper>
  );
};

export default Header;
