import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { PAGE_PATHS } from "../_constants/pagePath";
import { extractErrorMessages } from "../_utils/errorHandler";
import { LoginFormData } from "../_interfaces/dto/request/LoginFormData";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { useUser } from "../_context/userContext";
import { LoginFormFields } from "../_constants/formConfigs/auth/loginFormFields";

interface useLoginParams{
  base: BaseData;
}

export const useLogin = ({base}: useLoginParams) => {
  // ログイン処理取得
  const {login} = useUser();
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // サーバー側のエラーメッセージ
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]); 
  // 入力欄
  const fields = LoginFormFields;
  
  // ログイン処理
  const handleLogin = async (loginForm: LoginFormData) => {
    try{
      // // APIリクエスト
      await login(loginForm);
      // トップページ遷移
      router.push(PAGE_PATHS.TOP(base.id));
    }catch(error){
      // エラーメッセージセット
      setServerErrorMessages(extractErrorMessages(error));
    }
  }

  return{register, handleSubmit, handleLogin, serverErrorMessages, errors, fields};
}