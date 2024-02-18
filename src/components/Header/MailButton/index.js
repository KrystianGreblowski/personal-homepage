import { Button, StyledButtonIcon, ButtonText } from "./styled";
import { ReactComponent as ButtonIcon } from "../../../images/message.svg";

const MailButton = () => {
  const emailAddress = "krystian.greblowski@gmail.com";

  return (
    <Button href={`mailto:${emailAddress}`}>
      <StyledButtonIcon>
        <ButtonIcon />
      </StyledButtonIcon>

      <ButtonText>Hire Me</ButtonText>
    </Button>
  );
};

export default MailButton;
