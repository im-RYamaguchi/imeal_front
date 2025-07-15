import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { FormInputData } from "../_interfaces/FormInputData";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, EMAIL_MAX_LENGTH, EMAIL_PATTERN, MAX_LENGTH_MESSAGE, MIN_LENGTH_MESSAGE, NAME_MAX_LENGTH, PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, PATTERN_MESSAGE } from "../_constants/validation";
import { useRouter } from "next/navigation";
import { PAGE_PATHS } from "../_constants/pagePath";
import { useBase } from "../_context/baseContext";
import { extractErrorMessages } from "../_utils/errorHandler";
import { createUser } from "../_utils/api/users";

// 入力する要素
const inputs: FormInputData<SignUpFormData>[] = [
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
  {
    labelText: PAGE_LABELS.SIGN_UP_FORM.EMAIL,
    type: 'email',
    placeholderText: PAGE_LABELS.SIGN_UP_FORM.EMAIL,
    name: 'email',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.EMAIL),
      maxLength: {
        value: EMAIL_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.EMAIL, EMAIL_MAX_LENGTH)
      },
      pattern: {
        value: EMAIL_PATTERN,
        message: PATTERN_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.EMAIL)
      }
    }
  },
  // パスワード
  {
    labelText: PAGE_LABELS.SIGN_UP_FORM.PASSWORD,
    type: 'password',
    placeholderText: PAGE_LABELS.SIGN_UP_FORM.PASSWORD,
    name: 'password',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD),
      minLength: {
        value: PASSWORD_MIN_LENGTH,
        message: MIN_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD, PASSWORD_MIN_LENGTH)
      },
      maxLength: {
        value: PASSWORD_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.SIGN_UP_FORM.PASSWORD, PASSWORD_MAX_LENGTH)
      }
    }
  },

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

export const useSignUp = () => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}, watch} = useForm<SignUpFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // 拠点コンテキスト
  const {base} = useBase();
  // サーバー側のエラーメッセージ
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]); 
  
  // サインアップ処理
  const handleSignUp = async (signUpForm: SignUpFormData) => {
    console.log('サインアップ処理');
    try{
      // APIリクエスト
      const user = createUser(signUpForm);
      // トップページ遷移
      router.push(PAGE_PATHS.TOP(base.id));
    }catch(error){
      // エラーメッセージセット
      setServerErrorMessages(extractErrorMessages(error));
    }
  }

  return{register, handleSubmit, handleSignUp, serverErrorMessages, errors, inputs};
}