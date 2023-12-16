import myPhoto from "../../images/header-image-test.png";
import { HeaderImage } from "./styled";

const Header = () => {
  return (
    <>
      <HeaderImage src={myPhoto} alt="Krystian Gręblowski" />
    </>
  );
};

export default Header;
