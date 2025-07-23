"use client";
import { mockReview } from "@/___tests___/mocks/data";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../_constants/validation";
import { ReviewFormData } from "../_interfaces/dto/request/ReviewFormData";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { FormInputData } from "../_interfaces/FormInputData";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

interface useReviewParams {
  base: BaseData;
}

export const useCreateReview = ({ base }: useReviewParams) => {
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