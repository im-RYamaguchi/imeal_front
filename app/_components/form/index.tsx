import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ErrorMessageList from "../error/errorMessageList";
import { FormInputData } from "@/app/_interfaces/FormInput";

import styles from "./Form.module.css";

interface FormProps<TFormData extends FieldValues>{
  // サーバーで起きたエラーメッセージ
  serverErrorMessages: string[];
  // サブミット時の処理
  onSubmit: (formData: TFormData) => void;
  // useForm
  handleSubmit:  UseFormHandleSubmit<TFormData, TFormData>
  register: UseFormRegister<TFormData>;
  // インプット要素
  inputs: FormInputData<TFormData>[];
}


// フォーム
const Form = <TFormData extends FieldValues>({serverErrorMessages, onSubmit, handleSubmit, register, inputs}: FormProps<TFormData>) => {
  
  return(
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {serverErrorMessages.length > 0 && <ErrorMessageList errorMessages={serverErrorMessages} />}

      {inputs.map((input, index) => (
        <InputField key={`${index}_${input.name}`}
          error={input.error}
          label={input.labelText}
          name={input.name}
          type={input.type}
          placeholder={input.placeholderText}
          validationRules={input.validationRules}
          register={register}
        />
      ))}

      <SubmitButton />
      
    </form>

  );
};

export default Form;