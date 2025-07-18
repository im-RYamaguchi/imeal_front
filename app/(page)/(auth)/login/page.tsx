"use client"
import { PAGE_TITLES } from "@/app/_constants/pageText";
import Form from "@/app/_components/form";
import { useLogin } from "@/app/_hocks/useLogin";

import styles from "./LoginPage.module.css";
import { useBase } from "@/app/_context/baseContext";

// ログインページ
const LoginPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;
  // ログインフック
  const {register, handleSubmit, handleLogin, serverErrorMessages, errors, inputs} = useLogin({base});

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