"use client";
import { mockReview, mockShop } from "@/___tests___/mocks/data";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, MIN_EVALUATION_MESSAGE, MAX_EVALUATION_MESSAGE } from "../_constants/validation";
import { ReviewFormData } from "../_interfaces/dto/request/ReviewFormData";
import { ShopFormData } from "../_interfaces/dto/request/ShopFormData";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { FormInputData } from "../_interfaces/FormInputData";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { trackSynchronousPlatformIOAccessInDev } from "next/dist/server/app-render/dynamic-rendering";
import { useRouter } from "next/navigation";
import { createReview } from "../_utils/api/reviews";
import { extractErrorMessages } from "../_utils/errorHandler";

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
    labelText: PAGE_LABELS.REVIEW.AMO,
    type: 'number',
    placeholderText: PAGE_LABELS.REVIEW.AMO,
    name: 'amount',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.AMO)
    }
  },

  //評価
  {
    labelText: PAGE_LABELS.REVIEW.EVALUATION,
    type: 'number',
    placeholderText: '評価を０～５で入力',
    name: 'evaluation',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION),
      min:{ value: 0,message:MIN_EVALUATION_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION,0)},
      max:{ value: 5,message:MAX_EVALUATION_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION,5)}
    }
  },

];

interface useReviewParams {
  base: BaseData;
}

export const useReview = ({ base }: useReviewParams) => {
  //フォームオブジェクト
  const { register, handleSubmit, formState: { errors } } = useForm<ReviewFormData>({ defaultValues: mockReview });

  //サーバーエラーメッセージ状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  const router = useRouter();

  //口コミ投稿処理
  const handleCreateReview = async (reviewForm: ReviewFormData) => {

    console.log("フォームから送信されたデータ:", reviewForm);
    try {
      //口コミ送信API
      const review = await createReview({ ...reviewForm});
    }catch(error){
      setServerErrorMessages(extractErrorMessages(error));
    }
  }
  return { handleCreateReview, handleSubmit, serverErrorMessages, register, errors, inputs }

}