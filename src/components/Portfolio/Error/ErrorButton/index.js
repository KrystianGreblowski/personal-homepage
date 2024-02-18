import { Button } from "./styled";

const ErrorButton = ({ url }) => {
  return (
    <Button href={url} target="_blank">
      Go to GitHub
    </Button>
  );
};

export default ErrorButton;
