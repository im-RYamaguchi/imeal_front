// ボタンCSS
import styles from './Button.module.css';

interface ButtonProps{
  text: string;
  onClick: () => void;
  styleType?: string;
};

// ボタン
const Button = ({text, onClick, styleType}: ButtonProps) => {
  return(
    <button className="" onClick={onClick}>{text}</button>
  );
};

export default Button;