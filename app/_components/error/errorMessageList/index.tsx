
import ErrorMessage from '../errorMessage'; 

interface ErrorMessageListProps{
  errorMessages: string[];
}

const ErrorMessageList = ({errorMessages}: ErrorMessageListProps) => {
  return(
    <div>
      <ul>
        {errorMessages.map((error, index) => (
          <ErrorMessage key={index} errorMessage={error} />
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessageList;