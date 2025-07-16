import Link from "next/link"
import styles from './LinkButton.module.css'

interface LinkButtonProps{
  text: string;
  href: string;
  styleType?: 'shopName' | 'shopUrl' |string;
}

// リンクボタン
const LinkButton = ({text, href, styleType}: LinkButtonProps) => {
  const classNames = [styles.button];
  if(styleType === 'shopName'){
    classNames.push(styles.shopName);
  }
  if(styleType === 'shopUrl'){
    classNames.push(styles.shopUrl);
  }
  return(
    <Link className={classNames.join(' ')} href={href}>{text}</Link>
  );
};

export default LinkButton;