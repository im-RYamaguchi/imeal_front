import { BaseData } from "../_interfaces/baseData";

// テスト拠点データ
export const base: BaseData = {
  id: 1,
  name: "三軒茶屋ラボ",
  location: {
    lat: 35.6431745, 
    lon: 139.6571133
  }
}

const base2: BaseData = {
  id: 2,
  name: "本社",
  location: {
    lat: 35.6570587, 
    lon: 139.7587687
  }
}

// テスト拠点データ
export const bases: BaseData[] = [
  base, base2
];
