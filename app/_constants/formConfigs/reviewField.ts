import { FormInputData } from "@/app/_interfaces/FormInputData";
import { PAGE_LABELS } from "../pageText";
import { BLANK_MESSAGE, EVALUATION_MAX, EVALUATION_MIN, EVALUATION_VALIDATION_MESSAGE, MAX_NUMBER_MESSAGE, MIN_NUMBER_MESSAGE, NATURAL_PATTERN, NATURAL_PATTERN_MESSAGE, POSITIVE_INTEGER } from "../validation";
import { FieldValues, Path } from "react-hook-form";

// 飲食店のフォーム要素作成
export const createReviewFields = <T extends FieldValues>(): FormInputData<T>[] => ([
  // コメント
  {
    labelText: PAGE_LABELS.REVIEW.COMMENT,
    type: 'text',
    placeholderText: PAGE_LABELS.REVIEW.COMMENT,
    name: 'comment' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.COMMENT)
    }
  },
  //金額
  {
    labelText: PAGE_LABELS.REVIEW.AMOUNT,
    type: 'number',
    placeholderText: PAGE_LABELS.REVIEW.AMOUNT,
    name: 'amount' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.AMOUNT),
      pattern: {
        value: NATURAL_PATTERN,
        message: NATURAL_PATTERN_MESSAGE,
      }
    }
  },
  //評価
  {
    labelText: PAGE_LABELS.REVIEW.EVALUATION,
    type: 'number',
    placeholderText: EVALUATION_VALIDATION_MESSAGE,
    name: 'evaluation' as Path<T>,
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION),
      min:{ 
        value: EVALUATION_MIN,
        message: MIN_NUMBER_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION, EVALUATION_MIN)
      },
      max:{ 
        value: EVALUATION_MAX,
        message:MAX_NUMBER_MESSAGE(PAGE_LABELS.REVIEW.EVALUATION, EVALUATION_MAX)
      },
      pattern: {
        value: NATURAL_PATTERN,
        message: NATURAL_PATTERN_MESSAGE,
      }
    }
  }
]);
