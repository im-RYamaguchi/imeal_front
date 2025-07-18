import { ReviewsApiResponse } from "@/app/_interfaces/api/reviews";
import { api } from "./api";
import { REVIEWS_URL } from "./apiUrl";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import { mockGetReviews } from "@/___tests___/mocks/handlers";

// 口コミ取得APIリクエスト
export const getReviews = async (baseId?: number, limit?: number, sort?: string): Promise<ReviewData[]> => {
  try{
    return mockGetReviews();
    const response = await api.get<ReviewsApiResponse>(REVIEWS_URL.GET(baseId, limit, sort));
    return response.data.reviews;
  }catch(error){
    throw error;
  }
};

// 口コミ削除APIリクエスト
export const deleteReview = async (reviewId: number): Promise<void> => {
  try{
    // テスト
    return;
    const response = await api.delete(REVIEWS_URL.DELETE(reviewId));

  }catch(error){
    throw error;
  }

}