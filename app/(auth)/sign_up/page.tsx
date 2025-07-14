"use client"
import { useForm } from "react-hook-form";

import Form from "@/app/_components/form";

// サインアップページ
const SignUpPage = () => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}, watch} = useForm<SignUpFormData>();
  
  return(
    <h1>サインアップページ</h1>
    
  );
};

export default SignUpPage;