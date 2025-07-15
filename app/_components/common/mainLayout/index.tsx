"use client"
import { useBase } from "@/app/_context/baseContext";

import Header from "../header";
import Loading from "../loading";
import ErrorMessage from "../../error/errorMessage";
import { GETTING_ERROR, PAGE_LABELS } from "@/app/_constants/pageText";

// メインレイアウト（拠点IDの取得状況による表示）
const MainLayout = ({children}: {children: React.ReactNode}) => {
  // 拠点コンテキスト
  const {bases, base, isBaseLoading} = useBase();
  
  // ローディング中
  if(isBaseLoading){
    return <Loading />
  }

  // 拠点データが取得できなかった場合
  if(bases === null || base === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.BASE.NAME)}/>
  }
  return(
    <>
    <Header bases={bases} base={base}/>
    <main>
      {children}
    </main>
    </>
  );
};

export default MainLayout;