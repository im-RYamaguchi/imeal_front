import { useState } from "react";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../_constants/validation";
import { FormInputData } from "../_interfaces/FormInputData";
import { useForm } from "react-hook-form";
import { extractErrorMessages } from "../_utils/errorHandler";
import { useRouter } from "next/navigation";
import { createShop } from "../_utils/api/shops";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { PAGE_PATHS } from "../_constants/pagePath";
import { ShopAndReviewFormData } from "../_interfaces/dto/request/ShopAndReviewFormData";
import { createReview } from "../_utils/api/reviews";

const inputs: FormInputData<ShopAndReviewFormData>[] = [
  // url
  {
    labelText: PAGE_LABELS.SHOP.URL,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.URL,
    name: 'url',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.URL)
    }
  },
  // 店名
  {
    labelText: PAGE_LABELS.SHOP.NAME,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.NAME,
    name: 'name',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.NAME)
    }
  },
  // 住所
  {
    labelText: PAGE_LABELS.SHOP.ADDRESS,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.ADDRESS,
    name: 'address',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.ADDRESS)
    }
  },

  // 拠点からの距離
  {
    labelText: PAGE_LABELS.SHOP.DISTANCE,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.DISTANCE,
    name: 'distance',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.DISTANCE),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },

  // 拠点から徒歩何分
  {
    labelText: PAGE_LABELS.SHOP.MINUTES,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.MINUTES,
    name: 'minutes',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.MINUTES),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },
  // 緯度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LAT,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LAT,
    name: 'location.lat',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT)
    }
  },

  // 経度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LON,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LON,
    name: 'location.lon',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LON)
    }
  },
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
  // 金額
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
  // 評価
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
        message: MAX_NUMBER_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION, EVALUATION_MAX)
      }
    }
  },
];

interface useCreateShopAndReviewParams{
  base: BaseData
}

export const useCreateShopAndReview = ({base}: useCreateShopAndReviewParams) => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}} = useForm<ShopAndReviewFormData>();
  // サーバエラーメッセージ状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  const router = useRouter();
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
        shopId: shop.id
      });

      // 飲食店詳細ページ遷移
      router.push(PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id))
      
      
    }catch(error){
      setServerErrorMessages(extractErrorMessages(error));
    }
  
  }
  return {serverErrorMessages, handleCreateShopAndReview, register, handleSubmit, errors, inputs};

}