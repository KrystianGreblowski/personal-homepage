import { StyledIcon } from "./styled";

const IconButton = ({ icon, url }) => {
  return (
    <StyledIcon href={url} target="_blank">
      {icon}
    </StyledIcon>
  );
};

export default IconButton;
