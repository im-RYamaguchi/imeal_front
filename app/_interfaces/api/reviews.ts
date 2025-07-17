import { ReviewData } from "../dto/response/ReviewData";

// 口コミリスト取得APIのレスポンス全体の型
export interface ReviewsApiResponse {
  reviews: ReviewData[];
}