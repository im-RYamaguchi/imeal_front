"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";
import Shop from "@/app/_components/shops/Shop";
import ShopMap from "@/app/_components/shopMap";
import Reviews from "@/app/_components/reviews";
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";
import { useShopDetail } from "@/app/_hocks/useShopDetail";

import styles from "./ShopDetailPage.module.css";

// グルメ詳細ページ
const ShopDetailPage = () => {
  // グルメ詳細フック
  const {shopWithReviews ,isShopWithReviewsLoading} = useShopDetail();
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

        <Shop shop={shopWithReviews} />
      </div>

      <h2>{PAGE_SUB_TITLES.SHOP_DETAIL.REVIEWS}</h2>

      <Reviews reviews={shopWithReviews.reviews} />
    </>
  );
};

export default ShopDetailPage;