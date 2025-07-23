import { ReviewData } from "../dto/response/ReviewData";

// 口コミ投稿APIのレスポンス全体の型
export interface ReviewApiResponse {
  review: ReviewData;
}

// 口コミリスト取得APIのレスポンス全体の型
export interface ReviewsApiResponse {
  reviews: ReviewData[];
}