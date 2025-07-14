import Link from "next/link"
import styles from './LinkButton.module.css'

interface LinkButtonProps{
  text: string;
  href: string;
  styleType?: string;
}

// リンクボタン
const LinkButton = ({text, href, styleType}: LinkButtonProps) => {
  return(
    <Link className={styles.button} href={href}>{text}</Link>
  );
};

export default LinkButton;