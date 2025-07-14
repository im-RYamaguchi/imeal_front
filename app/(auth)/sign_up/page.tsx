"use client"
import { useForm } from "react-hook-form";

import Form from "@/app/_components/form";
import { FormInputData } from "@/app/_interfaces/FormInput";
import { PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import { BLANK_MESSAGE, EMAIL_MAX_LENGTH, EMAIL_PATTERN, MAX_LENGTH_MESSAGE, MIN_LENGTH_MESSAGE, NAME_MAX_LENGTH, PASSWORD_CONFIRMATION_MESSAGE, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, PATTERN_MESSAGE } from "@/app/_constants/validation";
import { useState } from "react";

import styles from "./SignUp.module.css";

// サインアップページ
const SignUpPage = () => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}, watch} = useForm<SignUpFormData>();
  // サーバー側のエラーメッセージ
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]); 

  const inputs: FormInputData<SignUpFormData>[] = [
    // 名前
    {
      error: errors.name,
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
      error: errors.email,
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
      error: errors.password,
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
      error: errors.passwordConfirmation,
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
        validate: (passwordConfirmation: string) =>
          passwordConfirmation === watch('password')
          ? true
          : PASSWORD_CONFIRMATION_MESSAGE
      }
    }
  ];

  const handleSignUp = (signUpForm: SignUpFormData) => {

  }
  
  return(
    <div className={styles.signUp}>
      <h1>{PAGE_TITLES.SIGN_UP}</h1>

      <Form
        serverErrorMessages={serverErrorMessages}
        onSubmit={handleSignUp}
        handleSubmit={handleSubmit}
        register={register}
        inputs={inputs}
      />

    </div>
  );
};

export default SignUpPage;