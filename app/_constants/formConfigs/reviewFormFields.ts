import { ReviewFormData } from "@/app/_interfaces/dto/request/ReviewFormData";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { createReviewFields } from "./reviewField";

// 口コミのフォーム要素
export const reviewFormFields: FormInputData<ReviewFormData>[] = [
  ...createReviewFields<ReviewFormData>()
];
