import { useState } from "react";
// import { PAGE_LABELS } from "../_constants/pageText";
// import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../_constants/validation";
// import { FormInputData } from "../_interfaces/FormInputData";
import { useForm } from "react-hook-form";
import { extractErrorMessages } from "../_utils/errorHandler";
import { useRouter } from "next/navigation";
import { createShop } from "../_utils/api/shops";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { PAGE_PATHS } from "../_constants/pagePath";
import { ShopAndReviewFormData } from "../_interfaces/dto/request/ShopAndReviewFormData";
import { createReview } from "../_utils/api/reviews";
import { shopAndReviewFormFields } from "../_constants/formConfigs/shopAndReviewFormFields";

interface useCreateShopAndReviewParams{
  base: BaseData
}

export const useCreateShopAndReview = ({base}: useCreateShopAndReviewParams) => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}} = useForm<ShopAndReviewFormData>();
  // サーバエラーメッセージ状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  // ルーターオブジェクト
  const router = useRouter();
  // フォーム要素取得
  const fields = shopAndReviewFormFields;

  // 飲食店、口コミ投稿処理
  const handleCreateShopAndReview = async (form: ShopAndReviewFormData) => {
    try{
      // 飲食店作成API
      const shop = await createShop({
        url: form.url,
        name: form.name,
        address: form.address,
        distance: form.distance,
        minutes: form.minutes,
        baseId: base.id,
        location: form.location
      });

      // 口コミ作成API
      const review = await createReview({
        comment: form.comment,
        amount: form.amount,
        evaluation: form.evaluation,
        shopId: shop.id,
        imgPath: '画像'
      });

      // 飲食店詳細ページ遷移
      router.push(PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id))
      
      
    }catch(error){
      setServerErrorMessages(extractErrorMessages(error));
    }
  
  }
  return {serverErrorMessages, handleCreateShopAndReview, register, handleSubmit, errors, fields};

}