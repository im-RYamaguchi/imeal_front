"use client"
import { useSignUp } from "@/app/_hocks/useSignUp";

import Form from "@/app/_components/form";

import { PAGE_TITLES } from "@/app/_constants/pageText";

import styles from "./SignUp.module.css";

// サインアップページ
const SignUpPage = () => {
  // サインアップのフック
  const {register, handleSubmit, handleSignUp, serverErrorMessages, errors, inputs} = useSignUp();
  
  return(
    <div className={styles.signUp}>
      <h1>{PAGE_TITLES.SIGN_UP}</h1>

      <Form
        serverErrorMessages={serverErrorMessages}
        onSubmit={handleSignUp}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        inputs={inputs}
      />

    </div>
  );
};

export default SignUpPage;