import myPhoto from "../../images/header-image-test.png";
import { Wrapper, HeaderImage, Caption, Name, AboutMe } from "./styled";

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
        <button>Hire me</button>
      </div>
    </Wrapper>
  );
};

export default Header;
