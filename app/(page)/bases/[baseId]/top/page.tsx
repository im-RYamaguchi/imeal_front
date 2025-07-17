import { PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";
import ShopMap from "@/app/_components/shopMap";

import styles from "./TopPage.module.css";
import { mockReviews, mockShop, mockShops } from "@/___tests___/mocks/data";
import Reviews from "@/app/_components/reviews";

// トップページ
const TopPage = () => {
  return(
    <>
      <h1>{PAGE_TITLES.TOP}</h1>

      <div className={styles.content}>
        <div>
          <h2>{PAGE_SUB_TITLES.TOP.SHOPS_MAP}</h2>
          <ShopMap base={mockShop.base} shops={mockShops} />
        </div>

        <div>
          <h2>{PAGE_SUB_TITLES.TOP.RECENT_REVIEWS}</h2>
          <Reviews reviews={mockReviews} direction={'column'}/>
        </div>
      </div>
    </>
  );
};

export default TopPage;
