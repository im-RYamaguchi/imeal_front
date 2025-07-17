import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { mockReviews, mockShops, mockShops2, mockShopWithReviews, mockShopWithReviews2 } from "./data";
import { ShopWithReviewsData } from "@/app/_interfaces/dto/response/ShopWithReviewsData";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";

// モック処理
export const mockGetShops = (baseId?: number): ShopData[] => {
  // テスト
  if(baseId === 1){
    return mockShops;
  }else{
    return mockShops2;
  }
}


export const mockGetShopWithReviews = (shopId: number): ShopWithReviewsData => {
  // テスト
  if(shopId === 1){
    return mockShopWithReviews;
  }else{
    return mockShopWithReviews2;
  }
}

export const mockGetReviews = (): ReviewData[] => {
  return mockReviews;
}
