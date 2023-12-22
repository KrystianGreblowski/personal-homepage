import { Wrapper, Caption, Mail, Info, Icons } from "./styled";
import { ReactComponent as GitHubIcon } from "../../images/github-black.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-black.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Caption>Let's talk</Caption>

      <Mail>krystian.greblowski@gmail.com</Mail>

      <Info>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me
      </Info>

      <Icons>
        <GitHubIcon />
        <FacebookIcon />
      </Icons>
    </Wrapper>
  );
};

export default Footer;
