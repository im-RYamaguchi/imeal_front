import { PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";
import Shop from "@/app/_components/shops/Shop";
import { mockBase, mockShop } from "@/___tests___/mocks/data";
import ShopMap from "@/app/_components/shopMap";

import styles from "./ShopDetailPage.module.css";

// グルメ詳細ページ
const ShopDetailPage = () => {
  return(
    <>
      <h1>{PAGE_TITLES.SHOP_DETAIL}</h1>

      <h2>{PAGE_SUB_TITLES.SHOP_DETAIL.SHOP_INFO}</h2>
      
      <div className={styles.shopInfo}>
        <ShopMap shops={[mockShop]} base={mockBase}/>

        <Shop shop={mockShop} />
      </div>

      <h2>{PAGE_SUB_TITLES.SHOP_DETAIL.REVIEWS}</h2>
      
    </>

  );
};

export default ShopDetailPage;