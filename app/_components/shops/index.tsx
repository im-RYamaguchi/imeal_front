import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import Shop from "./Shop";

import styles from "./Shops.module.css"

interface ShopsProps{
  shops: ShopData[];
  handleDelete: (shopId: number) => void;
}

// 飲食店リスト表示
const Shops = ({shops, handleDelete}: ShopsProps) => {
  return(
  <div className={styles.shops}>
    {shops.map((shop) => (
      <div className={styles.shopList}>
      <Shop key={shop.id} shop={shop} handleDelete={handleDelete}/>
      </div>
    ))}
  </div>
  );
};

export default Shops;