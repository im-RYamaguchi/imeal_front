import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { mockShops, mockShops2, mockShopWithReviews, mockShopWithReviews2 } from "./data";
import { ShopWithReviewsData } from "@/app/_interfaces/dto/response/ShopWithReviewsData";

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
