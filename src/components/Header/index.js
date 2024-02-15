import headerImage from "../../images/photoOfMe.png";
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
      <HeaderImage src={headerImage} alt="Krystian Gręblowski" />
      <HeaderContent>
        <Caption>This is</Caption>

        <Name>Krystian Gręblowski</Name>

        <AboutMe>
          👨🏻💻 I'm a Frontend Developer who enjoys working with React. I'm
          currently looking for new job opportunities.
        </AboutMe>

        <MailButton />
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
