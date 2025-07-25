import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { api } from "./api";
import { SHOPS_URL } from "./apiUrl";
import { ShopWithReviewsData } from "@/app/_interfaces/dto/response/ShopWithReviewsData";
import { ShopFormData } from "@/app/_interfaces/dto/request/ShopFormData";
import { mockGetShops, mockGetShopWithReviews } from "@/___tests___/mocks/handlers";
import { mockBase, mockReview, mockShops } from "@/___tests___/mocks/data";

// 飲食店取得（id）
export const getShopById = async (shopId: number): Promise<ShopData> => {
  try{
    const response = await api.get<ShopData>(SHOPS_URL.GET_BY_ID(shopId));
    return response.data;
  }catch(error){
    throw error;
  }
}

// 飲食店一覧取得（baseIdでフィルター可能）
export const getShops = async (baseId?: number): Promise<ShopData[]> => {
  try{
    return mockShops;
    const response = await api.get<ShopData[]>(SHOPS_URL.GET(baseId));
    return response.data;
  }catch(error){
    throw error;
  }
};

// 飲食店とその口コミ一覧取得
export const getShopWithReviews = async (shopId: number): Promise<ShopWithReviewsData> => {
  try{
    return mockGetShopWithReviews(shopId);
    const response = await api.get<ShopWithReviewsData>(SHOPS_URL.GET_WITH_REVIEWS(shopId));
    return response.data;
  }catch(error){
    throw error;
  }
};

// 飲食店作成
export const createShop = async (shopForm :ShopFormData): Promise<ShopData> => {
  try{    
    const response = await api.post<ShopData>(SHOPS_URL.POST, shopForm);
    return response.data;
  }catch(error){
    throw error;
  }
}

// 飲食店編集
export const editShop = async (shopForm: ShopFormData, shopId: number): Promise<ShopData> => {
  try{
    const response = await api.put<ShopData>(SHOPS_URL.PUT(shopId), shopForm);
    return response.data;
  }catch(error){
    throw error;
  }
}

// 飲食店削除
export const deleteShop = async (shopId: number): Promise<void> => {
  try{
    const response = await api.delete(SHOPS_URL.DELETE(shopId));
  }catch(error){
    throw error;
  }
};
