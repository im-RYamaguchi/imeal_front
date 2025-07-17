// 飲食店のAPIの型
import { BaseData } from "../dto/response/BaseData";
import { ShopData } from "../dto/response/ShopData";
import { ShopWithReviewsData } from "../dto/response/ShopWithReviewsData";

// 飲食店リスト取得APIのレスポンス全体の型
export interface ShopsApiResponse {
  shops: ShopData[];
}

// 飲食店とその口コミ取得APIのレスポンス全体の型
export interface ShopWithReviewsAPIResponse {
  shopWithReview: ShopWithReviewsData;
}

