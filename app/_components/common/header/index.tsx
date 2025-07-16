'use client'

import ClickButton from "../../button/clickButton";
import LinkButton from "../../button/linkButton";
import SelectButton from "../../button/selectButton";

import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { APP_NAME, HANDLE_NAME, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";

import styles from './Header.module.css';
import { OptionData } from "@/app/_interfaces/OptionData";
import { BaseData } from "@/app/_interfaces/dto/response/BaseData";
import { useRouter } from "next/navigation";
import { logout } from "@/app/_utils/api/auths";
import { extractErrorMessages } from "@/app/_utils/errorHandler";
import { useHeader } from "@/app/_hocks/useHeader";

interface HeaderProps{
  bases: BaseData[];
  base: BaseData;
  logout: () => void;
}

// ヘッダー
const Header = ({bases, base, logout}: HeaderProps) => {
  // ヘッダーコンテキスト
  const {options, handleChangeBase, handleLogout} = useHeader({bases, logout});

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