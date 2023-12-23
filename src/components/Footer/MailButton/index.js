import { Mail } from "./styled";

const MailButton = () => {
  const emailAddress = "krystian.greblowski@gmail.com";

  const mailHandler = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return <Mail onClick={mailHandler}>krystian.greblowski@gmail.com</Mail>;
};

export default MailButton;
