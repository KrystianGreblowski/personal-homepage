import { StyledIcon } from "./styled";

const IconButton = ({ icon, url }) => {
  const iconHandler = () => {
    window.open(url, "_blank");
  };

  return <StyledIcon onClick={iconHandler}>{icon}</StyledIcon>;
};

export default IconButton;
