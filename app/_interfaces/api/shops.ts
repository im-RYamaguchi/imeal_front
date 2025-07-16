// 飲食店のAPIの型
import { BaseData } from "../dto/response/BaseData";
import { ShopData } from "../dto/response/ShopData";

// 飲食店リスト取得APIのレスポンス全体の型
export interface ShopsApiResponse {
  shops: ShopData[];
}
