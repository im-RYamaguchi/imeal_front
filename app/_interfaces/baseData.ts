import { LocationData } from "./LocationData";

// 拠点データ型
export interface BaseData {
  id: number;
  name: string;
  location: LocationData;
}