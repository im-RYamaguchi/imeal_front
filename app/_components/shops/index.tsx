import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import Shop from "./Shop";

import styles from "./Shops.module.css"

interface ShopsProps{
  shops: ShopData[];
}

// 飲食店リスト表示
const Shops = ({shops}: ShopsProps) => {
  return(
  <div className={styles.shops}>
    {shops.map((shop) => (
      <Shop key={shop.id} shop={shop}/>
    ))}
  </div>
  );
};

export default Shops;