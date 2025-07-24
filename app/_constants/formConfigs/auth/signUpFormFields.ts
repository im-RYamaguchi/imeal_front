import { SignUpFormData } from "@/app/_interfaces/dto/request/SignUpFormData";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { PAGE_LABELS } from "../../pageText"; 
import { createEmailField, createPasswordField } from "./userField";
import { BLANK_MESSAGE, MAX_LENGTH_MESSAGE, MIN_LENGTH_MESSAGE, NAME_MAX_LENGTH, PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "../../validation";

// 入力する要素
export const signUpFormFields: FormInputData<SignUpFormData>[] = [
  // 名前
  {
    labelText: PAGE_LABELS.SIGN_UP_FORM.NAME,
    type: 'text',
    placeholderText: PAGE_LABELS.SIGN_UP_FORM.NAME,
    name: 'name',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.NAME),
      maxLength: {
        value: NAME_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.NAME, NAME_MAX_LENGTH)
      }
    }
  },
  // メールアドレス
  createEmailField(PAGE_LABELS.SIGN_UP_FORM.EMAIL),
  // パスワード
  createPasswordField(PAGE_LABELS.SIGN_UP_FORM.PASSWORD),
  // 確認用パスワード
  {
    labelText: PAGE_LABELS.SIGN_UP_FORM.PASSWORD_CONFIRMATION,
    type: 'password',
    placeholderText: PAGE_LABELS.SIGN_UP_FORM.EMAIL,
    name: 'passwordConfirmation',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD_CONFIRMATION),
      minLength: {
        value: PASSWORD_MIN_LENGTH,
        message: MIN_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD_CONFIRMATION, PASSWORD_MIN_LENGTH)
      },
      maxLength: {
        value: PASSWORD_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD_CONFIRMATION, PASSWORD_MAX_LENGTH)
      },
      validate: (passwordConfirmation: string, formValues) =>
        passwordConfirmation === formValues.password
        ? true
        : PASSWORD_CONFIRMATION_MESSAGE
    }
  }
];