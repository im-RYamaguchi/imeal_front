import { BaseData } from "./BaseData";
import { LocationData } from "./LocationData";

// 飲食店データ型
export interface ShopData{
  // ID
  id: number;
  // googleMapのURL
  url: string;
  // 店名
  name: string;
  // 住所
  address: string;
  // 拠点からの距離（m）
  distance: number;
  // 徒歩何分
  minutes: number;
  // 拠点
  base: BaseData;
  // 場所
  location: LocationData;
}