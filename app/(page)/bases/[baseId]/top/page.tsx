"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";
import ShopMap from "@/app/_components/shopMap";
import styles from "./TopPage.module.css";
import Reviews from "@/app/_components/reviews";
import { useBase } from "@/app/_context/baseContext";
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";
import { useTop } from "@/app/_hocks/useTop";

// トップページ
const TopPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;

  // トップページフック
  const {shops, reviews, isLoading, handleDelete} = useTop({base: base});

  // ローディング中の場合
  if(isLoading){
    return <Loading />;
  }

  // 飲食店または口コミがnullの場合
  if(shops === null || reviews === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(`${PAGE_LABELS.SHOP.VARIABLE_NAME}または${PAGE_LABELS.REVIEW.VARIABLE_NAME}`)} />
  }

  return(
    <>
      <h1>{PAGE_TITLES.TOP}</h1>

      <div className={styles.content}>
        <div>
          <h2>{PAGE_SUB_TITLES.TOP.SHOPS_MAP}</h2>
          <ShopMap base={base} shops={shops} />
        </div>

        <div>
          <h2>{PAGE_SUB_TITLES.TOP.RECENT_REVIEWS}</h2>
          <Reviews reviews={reviews} direction={'column'} isAddingShop={true} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default TopPage;
