"use client"
import { PAGE_TITLES } from "@/app/_constants/pageText";
import Form from "@/app/_components/form";
import { useLogin } from "@/app/_hocks/useLogin";

import styles from "./LoginPage.module.css";

// ログインページ
const LoginPage = () => {
  // ログインフック
  const {register, handleSubmit, handleLogin, serverErrorMessages, errors, inputs} = useLogin();

  return(
    <div className={styles.login}>
      <h1>{PAGE_TITLES.LOGIN}</h1>
      <Form 
        serverErrorMessages={serverErrorMessages}
        onSubmit={handleLogin}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        inputs={inputs}
      />
    </div>
  );
};

export default LoginPage;