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
      <Shop key={shop.id} shop={shop} handleDelete={handleDelete}/>
    ))}
  </div>
  );
};

export default Shops;