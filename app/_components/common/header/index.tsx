"use client"
import ClickButton from "../../button/clickButton";
import LinkButton from "../../button/linkButton";
import SelectButton from "../../button/selectButton";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { APP_NAME, HANDLE_NAME, PAGE_LABELS, PAGE_TITLES, WELCOME_MESSAGE } from "@/app/_constants/pageText";
import styles from './Header.module.css';
import { BaseData } from "@/app/_interfaces/dto/response/BaseData";
import { useHeader } from "@/app/_hocks/useHeader";
import { UserData } from "@/app/_interfaces/dto/response/UserData";

interface HeaderProps{
  bases: BaseData[];
  base: BaseData;
  user: UserData | null;
}

// ヘッダー
const Header = ({bases, base, user}: HeaderProps) => {
  // ヘッダーコンテキスト
  const {options, handleChangeBase, handleLogout} = useHeader({bases});

  return(
    <header className={styles.header}>
      <div className={styles.leftArea}>
        {/* タイトル */}
        <h1><LinkButton href={PAGE_PATHS.TOP(base.id)} text={APP_NAME}/></h1>

        {/* 拠点選択 */}
        <div>
          <span>{PAGE_LABELS.BASE.NAME}：</span>
          <SelectButton options={options} initialValue={String(base.id)} onChange={handleChangeBase}/>
        </div>
      </div>

        {/* ログインユーザー表示 */}
        {user && (
          <div>
            <p>{WELCOME_MESSAGE(user.name)}</p>
          </div>
          )
        }
        
      <div className={styles.rightArea}>
        {/* グルメ・口コミ投稿ページ遷移 */}
        <LinkButton href={PAGE_PATHS.CREATE_SHOP_AND_REVIEW(base.id)} text={PAGE_TITLES.CREATE_SHOP_AND_REVIEW}  />
        
        {/* グルメ一覧ページ遷移 */}
        <LinkButton href={PAGE_PATHS.SHOPS(base.id)} text={PAGE_TITLES.SHOPS} />

        {/* ログインページ遷移 */}
        <LinkButton href={PAGE_PATHS.LOGIN} text={PAGE_TITLES.LOGIN} />

        {/* ログアウト処理 */}
        <ClickButton text={HANDLE_NAME.LOGOUT} onClick={handleLogout}/>

        {/* サインアップページ遷移 */}
        <LinkButton href={PAGE_PATHS.SIGN_UP} text={PAGE_TITLES.SIGN_UP} />
      </div>
    </header>
  );
};

export default Header;