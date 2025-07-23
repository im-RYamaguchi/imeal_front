"use client";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../_constants/validation";
import { ReviewFormData } from "../_interfaces/dto/request/ReviewFormData";
import { FormInputData } from "../_interfaces/FormInputData";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createReview } from "../_utils/api/reviews";
import { extractErrorMessages } from "../_utils/errorHandler";
import { getShopById } from "../_utils/api/shops";
import { ShopData } from "../_interfaces/dto/response/ShopData";
import { PAGE_PATHS } from "../_constants/pagePath";

const inputs: FormInputData<ReviewFormData>[] = [
  // コメント
  {
    labelText: PAGE_LABELS.REVIEW.COMMENT,
    type: 'text',
    placeholderText: PAGE_LABELS.REVIEW.COMMENT,
    name: 'comment',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.COMMENT)
    }
  },

  //金額
  {
    labelText: PAGE_LABELS.REVIEW.AMOUNT,
    type: 'number',
    placeholderText: PAGE_LABELS.REVIEW.AMOUNT,
    name: 'amount',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.AMOUNT),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },

  //評価
  {
    labelText: PAGE_LABELS.REVIEW.EVALUATION,
    type: 'number',
    placeholderText: EVALUATION_VALIDATION_MESSAGE,
    name: 'evaluation',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION),
      min:{ 
        value: EVALUATION_MIN,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION, EVALUATION_MIN)
      },
      max:{ 
        value: EVALUATION_MAX,
        message:MAX_NUMBER_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION, EVALUATION_MAX)
      }
    }
  },

];

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

  //口コミ投稿処理
  const handleCreateReview = async (reviewForm: ReviewFormData) => {
    if(shop === null) return;
    try {
      //口コミ送信API
      const review = await createReview({ ...reviewForm});
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
  

  return { shop, isShopLoading, handleCreateReview, handleSubmit, serverErrorMessages, register, errors, inputs }

}