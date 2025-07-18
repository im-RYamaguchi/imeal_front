import { useEffect, useState } from "react";
import { ShopData } from "../_interfaces/dto/response/ShopData";
import { ReviewData } from "../_interfaces/dto/response/ReviewData";
import { getShops } from "../_utils/api/shops";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { getReviews } from "../_utils/api/reviews";
import { REVIEW_LIMIT, SORT_CREATED_AT_DESC } from "../_constants/handleConstant";
import { extractErrorMessages } from "../_utils/errorHandler";

interface useTopParams{
  base: BaseData;
}

export const useTop = ({base}: useTopParams) => {
  // 飲食店状態管理
  const [shops, setShops] = useState<ShopData[] | null>(null);
  // 口コミ状態管理
  const [reviews, setReviews] = useState<ReviewData[] | null>(null);
  // ローディング中かどうか
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 口コミ削除処理
  const handleDelete = async (reviewId: number) => {
    try{
      // 口コミ削除削除APIリクエスト
      // 口コミ更新
      
    }catch(error){
      console.error(extractErrorMessages(error));
    }
  }

  // マウント時実行
  useEffect(() => {
    // 飲食店と口コミ取得
    const fetchShopsAndReviews = async () => {
      // ローディング中
      setIsLoading(true);
      try{

        // APIリクエスト
        const [shops, reviews] = await Promise.all([
          getShops(base.id),
          getReviews(base.id, REVIEW_LIMIT, SORT_CREATED_AT_DESC)
        ]);
        
        // セット
        setShops(shops);
        setReviews(reviews);
      }catch(error){
        // エラーメッセージコンソール表示
        console.error(extractErrorMessages(error));
      }
      // ローディング終了
      setIsLoading(false);
    }
    fetchShopsAndReviews();
  }, []);

  return{shops, reviews, isLoading, handleDelete}
}