import { BaseData } from "@/app/_interfaces/dto/response/BaseData";
import { ShopData } from "@/app/_interfaces/dto/response/ShopData";

// テスト拠点データ
export const mockBase: BaseData = {
  id: 1,
  name: "三軒茶屋ラボ",
  location: {
    lat: 35.6431745, 
    lon: 139.6571133
  }
}

const mockBase2: BaseData = {
  id: 2,
  name: "本社",
  location: {
    lat: 35.6570587, 
    lon: 139.7587687
  }
}

// テスト拠点リストデータ
export const mockBases: BaseData[] = [
  mockBase, mockBase2
];

// テストショップデータ
export const mockShop: ShopData = {
  id: 1,
  url: 'https://www.google.co.jp/maps/place/%E9%A6%99%E4%B9%83/@35.6432774,139.6620267,19z/data=!3m1!4b1!4m6!3m5!1s0x6018f49d734f8641:0x4ea1ff6b5e9f7fc4!8m2!3d35.6432763!4d139.6626704!16s%2Fg%2F11b7hfr401?hl=ja&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D',
  name: '香乃',
  address: '〒154-0023 東京都世田谷区若林１丁目１６−１',
  distance: 230,
  minutes: 3,
  base: mockBase,
  location: {
    lat: 35.6430806,
    lon: 139.6609877
  }
};

export const mockShop2: ShopData = {
  id: 2,
  url: 'https://www.google.co.jp/maps/place/%E5%90%89%E9%87%8E%E5%AE%B6+%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B%E5%BA%97/@35.6445307,139.6683004,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f4a1dee09a81:0xc4921b8f83904066!8m2!3d35.6445264!4d139.6708753!16s%2Fg%2F1td1k0rm?hl=ja&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D',
  name: '吉野家 三軒茶屋店',
  address: '〒154-0004 東京都世田谷区太子堂２丁目１６−８',
  distance: 1100,
  minutes: 15,
  base: mockBase,
  location: {
    lat: 35.6445307,
    lon: 139.6683004
  }
};

export const mockShop3: ShopData = {
  id: 3,
  url: 'https://www.google.co.jp/maps/place/%E5%90%89%E9%87%8E%E5%AE%B6+%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B%E5%BA%97/@35.6445307,139.6683004,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f4a1dee09a81:0xc4921b8f83904066!8m2!3d35.6445264!4d139.6708753!16s%2Fg%2F1td1k0rm?hl=ja&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D',
  name: '丸亀製麺ハマサイト',
  address: '〒105-0022 東京都港区海岸１丁目２−２０ 汐留ビルディング 1F',
  distance: 210,
  minutes: 3,
  base: mockBase2,
  location: {
    lat: 35.6566608,
    lon: 139.756288
  }
};



// テストショップリストデータ
export const mockShops: ShopData[] = [
  mockShop, mockShop2
]
export const mockShops2: ShopData[] = [
  mockShop3
]

