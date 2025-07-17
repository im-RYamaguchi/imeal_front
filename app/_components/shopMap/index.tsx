import { BaseData } from "@/app/_interfaces/dto/response/BaseData"
import { ShopData } from "@/app/_interfaces/dto/response/ShopData";

interface ShopMapProps{
  base: BaseData;
  shops: ShopData[]
}

const ShopMap = ({base, shops}: ShopMapProps) => {
  return(
    <img src={`/images/map_${base.id}.png`} alt="グルメマップ" style={{width: '50vw'}}/>
  );
};

export default ShopMap;