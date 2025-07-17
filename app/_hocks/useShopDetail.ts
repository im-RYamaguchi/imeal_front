import { useEffect, useState } from "react";
import { ShopWithReviewsData } from "../_interfaces/dto/response/ShopWithReviewsData";
import { useParams } from "next/navigation";
import { getShopWithReviews } from "../_utils/api/shops";

// グルメ詳細フック
export const useShopDetail = () => {
  // 飲食店とその口コミリスト状態管理
  const [shopWithReviews, setShopWithReviews] = useState<ShopWithReviewsData | null>(null);
  // 飲食店をローディング中かどうか
  const [isShopWithReviewsLoading, setIsShopWithReviewsLoading] = useState<boolean>(true);
  // URL情報オブジェクト
    const params = useParams();

  // URLの飲食店ID変更時実行
  useEffect(() => {
    // 飲食店
    const fetchShopWithReviews = async () => {
      // ローディング中
      setIsShopWithReviewsLoading(true);
      // URLから飲食店ID取得
      const paramShopId = params.shopId;
      let shopId: number;
      // URLからIDが見つかり、String型の場合
      if(typeof paramShopId === 'string'){
        shopId = Number(paramShopId);    
      // 拠点が空の場合
      }else{
        // ローディング終了
        setIsShopWithReviewsLoading(false);
        return;
      }
      // 飲食店とその口コミ取得APIリクエスト
      const shopWithReviews = await getShopWithReviews(shopId);
      // 飲食店とその口コミセット
      setShopWithReviews(shopWithReviews);
      // ローディング終了
      setIsShopWithReviewsLoading(false);
    };
    fetchShopWithReviews();
  }, [params.shopId]);
  
  return{shopWithReviews, isShopWithReviewsLoading};
}