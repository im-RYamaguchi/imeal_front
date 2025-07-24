import { LoginFormData } from "@/app/_interfaces/dto/request/LoginFormData";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { createEmailField, createPasswordField } from "./userField";
import { PAGE_LABELS } from "../../pageText"; 

// ログインフォーム要素
export const LoginFormFields: FormInputData<LoginFormData>[] = [
  // メールアドレス
  createEmailField(PAGE_LABELS.LOGIN_FORM.EMAIL),
  // パスワード
  createPasswordField(PAGE_LABELS.LOGIN_FORM.PASSWORD)
];
