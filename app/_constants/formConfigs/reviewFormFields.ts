import { ReviewFormData } from "@/app/_interfaces/dto/request/ReviewFormData";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { PAGE_LABELS } from "../pageText";
import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "../validation";

export const reviewFormFields: FormInputData<ReviewFormData>[] = [
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
  }
];
