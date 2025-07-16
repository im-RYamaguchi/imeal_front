import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormInputData } from "../_interfaces/FormInputData";
import { PAGE_LABELS } from "../_constants/pageText";
import { BLANK_MESSAGE, EMAIL_MAX_LENGTH, EMAIL_PATTERN, MAX_LENGTH_MESSAGE, MIN_LENGTH_MESSAGE, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, PATTERN_MESSAGE } from "../_constants/validation";
import { useRouter } from "next/navigation";
import { PAGE_PATHS } from "../_constants/pagePath";
import { extractErrorMessages } from "../_utils/errorHandler";
import { LoginFormData } from "../_interfaces/dto/request/LoginFormData";
import { BaseData } from "../_interfaces/dto/response/BaseData";

// 入力する要素
const inputs: FormInputData<LoginFormData>[] = [
  // メールアドレス
  {
    labelText: PAGE_LABELS.LOGIN_FORM.EMAIL,
    type: 'email',
    placeholderText: PAGE_LABELS.LOGIN_FORM.EMAIL,
    name: 'email',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.LOGIN_FORM.EMAIL),
      maxLength: {
        value: EMAIL_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.LOGIN_FORM.EMAIL, EMAIL_MAX_LENGTH)
      },
      pattern: {
        value: EMAIL_PATTERN,
        message: PATTERN_MESSAGE(PAGE_LABELS.LOGIN_FORM.EMAIL)
      }
    }
  },
  // パスワード
  {
    labelText: PAGE_LABELS.LOGIN_FORM.PASSWORD,
    type: 'password',
    placeholderText: PAGE_LABELS.LOGIN_FORM.PASSWORD,
    name: 'password',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.LOGIN_FORM.PASSWORD),
      minLength: {
        value: PASSWORD_MIN_LENGTH,
        message: MIN_LENGTH_MESSAGE(PAGE_LABELS.LOGIN_FORM.PASSWORD, PASSWORD_MIN_LENGTH)
      },
      maxLength: {
        value: PASSWORD_MAX_LENGTH,
        message: MAX_LENGTH_MESSAGE(PAGE_LABELS.LOGIN_FORM.PASSWORD, PASSWORD_MAX_LENGTH)
      }
    }
  }
];

interface useLoginParams{
  base: BaseData;
  login: (loginForm: LoginFormData) => void;
}

export const useLogin = ({base, login}: useLoginParams) => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // サーバー側のエラーメッセージ
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]); 
  
  // ログイン処理
  const handleLogin = async (loginForm: LoginFormData) => {
    try{
      // // APIリクエスト
      const user = login(loginForm);
      // トップページ遷移
      router.push(PAGE_PATHS.TOP(base.id));
    }catch(error){
      // エラーメッセージセット
      setServerErrorMessages(extractErrorMessages(error));
    }
  }

  return{register, handleSubmit, handleLogin, serverErrorMessages, errors, inputs};
}