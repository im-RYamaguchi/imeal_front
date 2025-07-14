
import ErrorMessage from '../errorMessage'; 
import styles from './ErrorMessageList.module.css';

interface ErrorMessageListProps{
  errorMessages: string[];
}

const ErrorMessageList = ({errorMessages}: ErrorMessageListProps) => {
  return(
    <div className={styles.errorListContainer}>
      <ul className={styles.errorList}>
        {errorMessages.map((error, index) => (
          <ErrorMessage key={index} errorMessage={error} />
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessageList;