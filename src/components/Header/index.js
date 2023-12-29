import myPhoto from "./header-image-test.png";
import {
  Wrapper,
  HeaderImage,
  HeaderContent,
  Caption,
  Name,
  AboutMe,
} from "./styled";
import MailButton from "./MailButton";

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

        <MailButton />
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
