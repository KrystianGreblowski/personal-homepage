import { Wrapper, Caption, Info, Icons } from "./styled";
import { ReactComponent as GitHubIcon } from "../../images/github-black.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-black.svg";
import MailButton from "./MailButton";
import IconButton from "./IconButton";

const Footer = () => {
  return (
    <Wrapper>
      <Caption>Let's talk</Caption>

      <MailButton />

      <Info>
        I'm always open to new projects and I'm constantly improving my skills.
        If you have an idea for a website and would like to realise it, please
        feel free to contact me 🤞
      </Info>

      <Icons>
        <IconButton
          icon={<GitHubIcon />}
          url="https://github.com/KrystianGreblowski"
        />

        <IconButton
          icon={<FacebookIcon />}
          url="https://www.facebook.com/profile.php?id=100000060031788"
        />
      </Icons>
    </Wrapper>
  );
};

export default Footer;
