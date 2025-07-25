"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";
import Shop from "@/app/_components/shops/Shop";
import ShopMap from "@/app/_components/shopMap";
import Reviews from "@/app/_components/reviews";
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";
import { useShopDetail } from "@/app/_hocks/useShopDetail";
import LinkButton from "@/app/_components/button/linkButton";

import styles from "./ShopDetailPage.module.css";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { useBase } from "@/app/_context/baseContext";

// グルメ詳細ページ
const ShopDetailPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;
  // グルメ詳細フック
  const {shopWithReviews ,isShopWithReviewsLoading, handleShopDelete, handleReviewDelete} = useShopDetail({base: base});
  // 飲食店取得中の場合
  if(isShopWithReviewsLoading){
    return <Loading />;
  }
  // 飲食店とその口コミが空の場合
  if(shopWithReviews === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.SHOP.VARIABLE_NAME)} />
  }

  return(
    <>
      <h1>{PAGE_TITLES.SHOP_DETAIL}</h1>

      <h2>{PAGE_SUB_TITLES.SHOP_DETAIL.SHOP_INFO}</h2>
      
      <div className={styles.shopInfo}>
        <ShopMap shops={[shopWithReviews]} base={shopWithReviews.base}/>
        <Shop shop={shopWithReviews} handleDelete={handleShopDelete}/>
      </div>

      <h2>{PAGE_SUB_TITLES.SHOP_DETAIL.REVIEWS}</h2>

      <LinkButton text={PAGE_TITLES.CREATE_REVIEW} href={PAGE_PATHS.CREATE_REVIEW(shopWithReviews.base.id,shopWithReviews.id)} />
      <Reviews direction="row" reviews={shopWithReviews.reviews}  handleDelete={handleReviewDelete} />

    </>
  );
};

export default ShopDetailPage;