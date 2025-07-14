interface ErrorMessageProps{
  errorMessage: string;
}

const ErrorMessage = ({errorMessage}: ErrorMessageProps) => {
  return(
    <li>{errorMessage}</li>
  );
};

export default ErrorMessage;