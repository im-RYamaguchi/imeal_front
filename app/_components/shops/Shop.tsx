import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import LinkButton from "../button/linkButton";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { HANDLE_NAME, PAGE_LABELS } from "@/app/_constants/pageText";
import ClickButton from "../button/clickButton";

import styles from "./Shops.module.css"

interface ShopProps{
  shop: ShopData;
  handleDelete: (shopId: number) => void;
}

// 飲食店表示
const Shop = ({shop, handleDelete}: ShopProps) => {
  // 削除ボタンクリック時
  const onClick = () => {
    // 飲食店削除処理
    handleDelete(shop.id);
  }
  return(
    <div className={styles.shop}>
      <LinkButton text={shop.name} href={PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id)} styleType={'shopName'} />
      <LinkButton text={PAGE_LABELS.SHOP.URL} href={shop.url} styleType={'shopUrl'}/>
      <p>{PAGE_LABELS.SHOP.ADDRESS}：{shop.address}</p>
      <p>{PAGE_LABELS.SHOP.DISTANCE(shop.distance)}</p>
      <p>{PAGE_LABELS.SHOP.MINUTES(shop.minutes)}</p>
      <LinkButton text={HANDLE_NAME.EDIT} href={PAGE_PATHS.EDIT_SHOP(shop.base.id, shop.id)} />
      <ClickButton text={HANDLE_NAME.DELETE} onClick={onClick} />
      
    </div>
  );
};

export default Shop;