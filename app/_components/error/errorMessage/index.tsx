import styles from "../Error.module.css"

interface ErrorMessageProps{
  errorMessage: string;
}

const ErrorMessage = ({errorMessage}: ErrorMessageProps) => {
  return(
    <li className={styles.errorMessage}>{errorMessage}</li>
  );
};

export default ErrorMessage;