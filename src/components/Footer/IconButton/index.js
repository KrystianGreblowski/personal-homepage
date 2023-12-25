import { StyledIcon } from "../styled";

const IconButton = ({ icon, url }) => {
  const IconHandler = () => {
    window.open(url, "_blank");
  };

  return <StyledIcon onClick={IconHandler}>{icon}</StyledIcon>;
};

export default IconButton;
