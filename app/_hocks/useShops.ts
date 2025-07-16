import { BaseData } from "../_interfaces/dto/response/BaseData"
import { useEffect, useState } from "react";
import { extractErrorMessages } from "@/app/_utils/errorHandler";
import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { getShops } from "@/app/_utils/api/shops";


interface useShopParams{
  base: BaseData;
}

export const useShops = ({base}: useShopParams) => {
  // 飲食店リスト状態
  const [shops, setShops] = useState<ShopData[] | null>(null);
  // 飲食店を取得中か
  const [isShopLoading, setIsShopLoading] = useState<boolean>(true);

  // マウント時実行
  useEffect(() => {
    // 飲食店リスト取得
    const fetchShops = async () => {
      // 飲食店取得中
      setIsShopLoading(true);
      // 飲食店取得API（baseIdでフィルター）
      const shops = await getShops(base.id);
      // 飲食店セット
      setShops(shops);
      try{
      }catch(error){
        // エラーメッセージコンソール表示
        console.error(extractErrorMessages(error));
      }
      // 飲食店取得終了
      setIsShopLoading(false);
    };
    fetchShops();
  }, []);

  return {shops, isShopLoading};
}