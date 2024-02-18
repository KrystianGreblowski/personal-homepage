import { Mail } from "./styled";

const MailButton = () => {
  const emailAddress = "krystian.greblowski@gmail.com";

  return (
    <Mail href={`mailto:${emailAddress}`}>krystian.greblowski@gmail.com</Mail>
  );
};

export default MailButton;
