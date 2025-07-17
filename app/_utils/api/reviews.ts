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

}