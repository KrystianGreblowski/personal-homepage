import myPhoto from "../../images/header-image-test.png";
import { Wrapper, HeaderImage, Caption } from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <HeaderImage src={myPhoto} alt="Krystian Gręblowski" />
      <div>
        <Caption>This is</Caption>
        <h1>Krystian Greblowski</h1>
        <p>
          I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </p>
        <button>Hire me</button>
      </div>
    </Wrapper>
  );
};

export default Header;
