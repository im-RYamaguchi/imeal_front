"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import Shops from "@/app/_components/shops";
import { useBase } from "@/app/_context/baseContext";
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";
import { useShops } from "@/app/_hocks/useShops";

// グルメ一覧ページ
const ShopsPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;
  // グルメ一覧フック
  const {shops, isShopLoading, handleDelete} = useShops({base});

  // 飲食店取得中の場合
  if(isShopLoading){
    return <Loading/>
  }

  // 飲食店が空の場合
  if(shops === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.SHOP.VARIABLE_NAME)}/>
  }

  return(
    <>
      <h1>{PAGE_TITLES.SHOPS}</h1>
      <Shops shops={shops} handleDelete={handleDelete} />
    </>
  );
};

export default ShopsPage;