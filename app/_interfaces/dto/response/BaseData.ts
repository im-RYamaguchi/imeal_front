import { LocationData } from "./LocationData";

// 拠点データ型
export interface BaseData {
  id: number;
  // 拠点名
  name: string;
  // 拠点位置
  location: LocationData;
}