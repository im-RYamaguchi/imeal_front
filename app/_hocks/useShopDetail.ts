import { useEffect, useState } from "react";
import { ShopWithReviewsData } from "../_interfaces/dto/response/ShopWithReviewsData";
import { useParams, useRouter } from "next/navigation";
import { deleteShop, getShopWithReviews } from "../_utils/api/shops";
import { extractErrorMessages } from "../_utils/errorHandler";
import { PAGE_PATHS } from "../_constants/pagePath";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { deleteReview } from "../_utils/api/reviews";

interface useShopDetailParams{
  base: BaseData;
}

// グルメ詳細フック
export const useShopDetail = ({base}: useShopDetailParams) => {
  // 飲食店とその口コミリスト状態管理
  const [shopWithReviews, setShopWithReviews] = useState<ShopWithReviewsData | null>(null);
  // 飲食店をローディング中かどうか
  const [isShopWithReviewsLoading, setIsShopWithReviewsLoading] = useState<boolean>(true);
  // URL情報オブジェクト
  const params = useParams();
  // ルーターオブジェクト
  const router = useRouter();

  // 飲食店削除処理
  const handleShopDelete = async (shopId: number) => {
    try{
      // 削除APIリクエスト
      await deleteShop(shopId);

      // 飲食店一覧ページ遷移
      router.push(PAGE_PATHS.SHOPS(base.id));
    }catch(error){
      // エラーメッセージコンソール表示
      console.error(extractErrorMessages(error));
    };
  }

  // 口コミ削除処理
  const handleReviewDelete = async (reviewId: number) => {
    try{
      // 口コミ削除削除APIリクエスト
      await deleteReview(reviewId);
      // 口コミ更新
      if(shopWithReviews === null){
        setShopWithReviews(null);
      }else{
        const reviews = shopWithReviews.reviews.filter((review) => (
          review.id !== reviewId
        ));
        setShopWithReviews({...shopWithReviews, reviews: reviews})
      }
      // 
    }catch(error){
      // エラーメッセージコンソール表示
      console.error(extractErrorMessages(error));
    }
  }

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
        // nullセット
        setShopWithReviews(null);
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
  
  return{shopWithReviews, isShopWithReviewsLoading, handleShopDelete, handleReviewDelete};
}