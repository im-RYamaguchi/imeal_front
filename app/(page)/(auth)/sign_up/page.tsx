"use client"
import { useSignUp } from "@/app/_hocks/useSignUp";
import Form from "@/app/_components/form";
import { PAGE_TITLES } from "@/app/_constants/pageText";
import styles from "./SignUp.module.css";
import { useBase } from "@/app/_context/baseContext";

// サインアップページ
const SignUpPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullの場合
  if(base === null) return;
  // サインアップのフック
  const {register, handleSubmit, handleSignUp, serverErrorMessages, errors, fields} = useSignUp({base});
  
  return(
    <div className={styles.signUp}>
      <h1>{PAGE_TITLES.SIGN_UP}</h1>

      <Form
        serverErrorMessages={serverErrorMessages}
        onSubmit={handleSignUp}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        fields={fields}
      />

    </div>
  );
};

export default SignUpPage;