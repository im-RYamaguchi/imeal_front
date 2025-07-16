import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { api } from "./api";
import { SHOPS_URL } from "./apiUrl";
import { ShopsApiResponse } from "@/app/_interfaces/api/shops";
import { mockShops, mockShops2 } from "@/___tests___/mocks/data";

// 飲食店一覧取得（baseIdでフィルター可能）
export const getShops = async (baseId?: number): Promise<ShopData[]> => {
  try{
    // テスト
    if(baseId === 1){
      return mockShops;
    }else if(baseId === 2){
      return mockShops2;
    }
    
    const response = await api.get<ShopsApiResponse>(SHOPS_URL.GET(baseId));
    return response.data.shops;
  }catch(error){
    throw error;
  }
}