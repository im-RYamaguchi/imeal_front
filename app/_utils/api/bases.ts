import { BaseData } from "@/app/_interfaces/dto/response/BaseData";
import { api } from "./api";
import { BASES_URL } from "./apiUrl";

// 拠点取得
export const getBases = async (): Promise<BaseData[]> => {
  try{
    const response = await api.get<BaseData[]>(BASES_URL.GET);
    // basesオブジェクトを抽出して返す
    return response.data;
  }catch(error){
    throw error;
  }
}