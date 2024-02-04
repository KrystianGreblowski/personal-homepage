import myPhoto from "../../images/header-image-test.png";
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
          👨🏻💻 I am a Frontend Developer who enjoys working with React. I am
          currently looking for new work opportunities.
        </AboutMe>

        <MailButton />
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
