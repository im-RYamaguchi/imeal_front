import { ShopAndReviewFormData } from "@/app/_interfaces/dto/request/ShopAndReviewFormData";
import { createShopFields } from "./shopField";
import { createReviewFields } from "./reviewField";
import { FormInputData } from "@/app/_interfaces/FormInputData";

// 飲食店と口コミフォーム要素
export const shopAndReviewFormFields: FormInputData<ShopAndReviewFormData>[] = [
  ...createShopFields<ShopAndReviewFormData>(), 
  ...createReviewFields<ShopAndReviewFormData>()
]