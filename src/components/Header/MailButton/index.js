import { Button, StyledButtonIcon, ButtonText } from "./styled";
import { ReactComponent as ButtonIcon } from "../../../images/message.svg";

const MailButton = () => {
  const emailAddress = "krystian.greblowski@gmail.com";

  const mailHandler = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Button onClick={mailHandler}>
      <StyledButtonIcon>
        <ButtonIcon />
      </StyledButtonIcon>
      <ButtonText>Hire Me</ButtonText>
    </Button>
  );
};

export default MailButton;
