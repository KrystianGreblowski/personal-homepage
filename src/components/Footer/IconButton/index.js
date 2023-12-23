import { StyledIcon } from "../styled";

const IconButton = ({ icon, url }) => {
  const IconHandler = () => {
    const urlReceived = url;

    window.open(urlReceived, "_blank");
  };

  return <StyledIcon onClick={IconHandler}>{icon}</StyledIcon>;
};

export default IconButton;
