import { FieldError, FieldErrors, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ErrorMessageList from "../error/errorMessageList";
import { FormInputData } from "@/app/_interfaces/FormInputData";

import styles from "./Form.module.css";
import { getNestedError } from "@/app/_utils/formHelper";

interface FormProps<TFormData extends FieldValues>{
  // サーバーで起きたエラーメッセージ
  serverErrorMessages: string[];
  // サブミット時の処理
  onSubmit: (formData: TFormData) => void;
  // useForm
  handleSubmit:  UseFormHandleSubmit<TFormData, TFormData>
  register: UseFormRegister<TFormData>;
  errors?: FieldErrors<TFormData>;
  // インプット要素
  fields: FormInputData<TFormData>[];
}

// フォーム
const Form = <TFormData extends FieldValues>({serverErrorMessages, onSubmit, handleSubmit, register, errors  = {} as FieldErrors<TFormData>, fields}: FormProps<TFormData>) => {
  return(
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {serverErrorMessages.length > 0 && <ErrorMessageList errorMessages={serverErrorMessages} />}

      {fields.map((fields, index) => {
        const fieldError = getNestedError(errors, fields.name);
        return(
          <InputField key={`${index}_${fields.name}`}
          error={fieldError as FieldError | undefined}
          label={fields.labelText}
          name={fields.name}
          type={fields.type}
          placeholder={fields.placeholderText}
          validationRules={fields.validationRules}
          register={register}
          />
        );
      })}

      <SubmitButton />
      
    </form>

  );
};

export default Form;