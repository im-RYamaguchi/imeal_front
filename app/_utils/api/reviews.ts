import { ReviewApiResponse, ReviewsApiResponse } from "@/app/_interfaces/api/reviews";
import { api } from "./api";
import { REVIEWS_URL } from "./apiUrl";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import { mockGetReviews } from "@/___tests___/mocks/handlers";
import { ReviewFormData } from "@/app/_interfaces/dto/request/ReviewFormData";
import { mockReview } from "@/___tests___/mocks/data";

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

//口コミ投稿APIリクエスト
export const createReview = async (reviewForm: ReviewFormData): Promise<ReviewData> =>{
try{
  console.log(reviewForm);
  // モック
  return mockReview;
  const response = await api.post<ReviewApiResponse>(REVIEWS_URL.CREATE , reviewForm);
  return response.data.review;
} catch (error) { 
  throw error;
}

};