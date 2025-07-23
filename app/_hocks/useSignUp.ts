import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { PAGE_PATHS } from "../_constants/pagePath";
import { extractErrorMessages } from "../_utils/errorHandler";
import { createUser } from "../_utils/api/users";
import { SignUpFormData } from "../_interfaces/dto/request/SignUpFormData";
import { BaseData } from "../_interfaces/dto/response/BaseData";
import { signUpFormFields } from "../_constants/formConfigs/signUpFormFields";

interface useSignUpParams{
  base: BaseData;
}

export const useSignUp = ({base}: useSignUpParams) => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}} = useForm<SignUpFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // サーバー側のエラーメッセージ
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]); 
  // 入力欄
  const fields = signUpFormFields;
  
  // サインアップ処理
  const handleSignUp = async (signUpForm: SignUpFormData) => {
    console.log('サインアップ処理');
    try{
      // APIリクエスト
      const user = await createUser(signUpForm);
      // トップページ遷移
      router.push(PAGE_PATHS.TOP(base.id));
    }catch(error){
      // エラーメッセージセット
      setServerErrorMessages(extractErrorMessages(error));
    }
  }

  return{register, handleSubmit, handleSignUp, serverErrorMessages, errors, fields};
}