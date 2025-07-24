"use client";
import { ReviewFormData } from "../_interfaces/dto/request/ReviewFormData";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createReview } from "../_utils/api/reviews";
import { extractErrorMessages } from "../_utils/errorHandler";
import { getShopById } from "../_utils/api/shops";
import { ShopData } from "../_interfaces/dto/response/ShopData";
import { PAGE_PATHS } from "../_constants/pagePath";
import { reviewFormFields } from "../_constants/formConfigs/reviewFormFields";

export const useCreateReview = () => {
  //フォームオブジェクト
  const { register, handleSubmit, formState: { errors } } = useForm<ReviewFormData>();

  //サーバーエラーメッセージ状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  // 飲食店状態管理
  const [shop, setShop] = useState<ShopData | null>(null);
  // ローディング中かどうか
  const [isShopLoading, setIsShopLoading] = useState<boolean>(true);
  // ルーターオブジェクト
  const router = useRouter();
  // URLパラメータオブジェクト
  const params = useParams();
  // フォーム要素取得
  const fields = reviewFormFields;

  //口コミ投稿処理
  const handleCreateReview = async (reviewForm: ReviewFormData) => {
    if(shop === null) return;
    try {
      //口コミ送信API
      const review = await createReview({ ...reviewForm, shopId: shop.id, imgPath: "画像"});
      // グルメ詳細ページ遷移
      router.push(PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id));
    }catch(error){
      setServerErrorMessages(extractErrorMessages(error));
    }
  };

  // URLの飲食店ID変更時実行
  useEffect(() => {
    // 飲食店
    const fetchShop = async () => {
      // ローディング中
      setIsShopLoading(true);
      // URLから飲食店ID取得
      const paramShopId = params.shopId;
      let shopId: number;
      // URLからIDが見つかり、String型の場合
      if(typeof paramShopId === 'string'){
        shopId = Number(paramShopId);    
      // 拠点が空の場合
      }else{
        // nullセット
        setShop(null);
        // ローディング終了
        setIsShopLoading(false);
        return;
      }
      // 飲食店とその口コミ取得APIリクエスト
      const shopWithReviews = await getShopById(shopId);
      // 飲食店とその口コミセット
      setShop(shopWithReviews);
      // ローディング終了
      setIsShopLoading(false);
    };
    fetchShop();
  }, [params.shopId]);
  

  return { shop, isShopLoading, handleCreateReview, handleSubmit, serverErrorMessages, register, errors, fields }

}