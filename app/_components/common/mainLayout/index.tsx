"use client"
import { useBase } from "@/app/_context/baseContext";

import Header from "../header"
import Loading from "../loading";

// メインレイアウト（拠点IDの取得状況による表示）
const MainLayout = ({children}: {children: React.ReactNode}) => {
  // 拠点コンテキスト
  const {bases, base, isBaseLoading} = useBase();
  
  // ローディング中
  if(isBaseLoading){
    return <Loading />
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