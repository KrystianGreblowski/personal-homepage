import { Wrapper, Caption, Info, Icons } from "./styled";
import { ReactComponent as GitHubIcon } from "./github-black.svg";
import { ReactComponent as FacebookIcon } from "./facebook-black.svg";
import MailButton from "./MailButton";
import IconButton from "./IconButton";

const Footer = () => {
  return (
    <Wrapper>
      <Caption>Let's talk</Caption>

      <MailButton />

      <Info>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me
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
