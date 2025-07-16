import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import LinkButton from "../button/linkButton";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { PAGE_LABELS } from "@/app/_constants/pageText";

import styles from "./Shops.module.css"

interface ShopProps{
  shop: ShopData;
}

// 飲食店表示
const Shop = ({shop}: ShopProps) => {
  return(
    <div className={styles.shop}>
      <LinkButton text={shop.name} href={PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id)} styleType={'shopName'} />
      <LinkButton text={PAGE_LABELS.SHOP.URL} href={shop.url} styleType={'shopUrl'}/>
      <p>{PAGE_LABELS.SHOP.ADDRESS}：{shop.address}</p>
      <p>{PAGE_LABELS.SHOP.DISTANCE(shop.distance)}</p>
      <p>{PAGE_LABELS.SHOP.MINUTES(shop.minutes)}</p>
    </div>
  );
};

export default Shop;