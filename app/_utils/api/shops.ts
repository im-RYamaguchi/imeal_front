import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { api } from "./api";
import { SHOPS_URL } from "./apiUrl";
import { ShopApiResponse, ShopsApiResponse, ShopWithReviewsAPIResponse } from "@/app/_interfaces/api/shops";
import { mockShop } from "@/___tests___/mocks/data";
import { ShopWithReviewsData } from "@/app/_interfaces/dto/response/ShopWithReviewsData";
import { mockGetShops, mockGetShopWithReviews } from "@/___tests___/mocks/handlers";
import { ShopFormData } from "@/app/_interfaces/dto/request/ShopFormData";

// 飲食店取得（id）
export const getShopById = async (shopId: number): Promise<ShopData> => {
  try{
    // モック
    return mockShop;

    const response = await api.get<ShopApiResponse>(SHOPS_URL.GET_BY_ID(shopId));
    return response.data.shop;
  }catch(error){
    throw error;
  }
}

// 飲食店一覧取得（baseIdでフィルター可能）
export const getShops = async (baseId?: number): Promise<ShopData[]> => {
  try{
    // モック
    return mockGetShops(baseId);
    
    const response = await api.get<ShopsApiResponse>(SHOPS_URL.GET(baseId));
    return response.data.shops;
  }catch(error){
    throw error;
  }
};

// 飲食店とその口コミ一覧取得
export const getShopWithReviews = async (shopId: number): Promise<ShopWithReviewsData> => {
  try{
    // モック
    return mockGetShopWithReviews(shopId);
    const response = await api.get<ShopWithReviewsAPIResponse>(SHOPS_URL.GET_WITH_REVIEWS(shopId));
    return response.data.shopWithReview;
  }catch(error){
    throw error;
  }
};

// 飲食店作成
export const createShop = async (shopForm :ShopFormData): Promise<ShopData> => {
  try{
    // モック
    return mockShop;
    
    const response = await api.post<ShopApiResponse>(SHOPS_URL.POST, shopForm);
    return response.data.shop;
  }catch(error){
    throw error;
  }
}

// 飲食店編集
export const editShop = async (shopForm: ShopFormData, shopId: number): Promise<ShopData> => {
  try{
    // モック
    return mockShop;
    const response = await api.put<ShopApiResponse>(SHOPS_URL.PUT(shopId), shopForm);
    return response.data.shop;
  }catch(error){
    throw error;
  }
}

// 飲食店削除
export const deleteShop = async (shopId: number): Promise<void> => {
  try{
    // テスト
    return;
    const response = await api.delete(SHOPS_URL.DELETE(shopId));
  }catch(error){
    throw error;
  }
};
