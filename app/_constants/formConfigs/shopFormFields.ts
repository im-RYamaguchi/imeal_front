import { ShopFormData } from "@/app/_interfaces/dto/request/ShopFormData";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { createShopFields } from "./shopField";

// 飲食店のフォーム要素
export const shopFormFields: FormInputData<ShopFormData>[] = [
  ...createShopFields<ShopFormData>()
];