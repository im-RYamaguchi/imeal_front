import { LocationData } from "../response/LocationData";

// 飲食店フォーム型
export interface ShopFormData{
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
  baseId: number;
  // 場所
  location: LocationData;
}