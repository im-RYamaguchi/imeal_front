// ボタンCSS
import styles from './Button.module.css';

interface ButtonProps{
  text: string;
  onClick: () => void;
  styleType?: string;
};

// ボタン
const ClickButton = ({text, onClick, styleType}: ButtonProps) => {
  return(
    <button className={styles.button} onClick={onClick}>{text}</button>
  );
};

export default ClickButton;