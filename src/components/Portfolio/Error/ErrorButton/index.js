import { Button } from "./styled";

const ErrorButton = ({ url }) => {
  const errorHandler = () => {
    window.open(url, "_blank");
  };
  return <Button onClick={errorHandler}>Go to GitHub</Button>;
};

export default ErrorButton;
