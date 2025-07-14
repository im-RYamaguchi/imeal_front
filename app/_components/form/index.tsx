import { FieldError, FieldValues, Path, RegisterOptions, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ErrorMessageList from "../error/errorMessageList";

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

interface FormInputData<TFormData extends FieldValues>{
  // エラーメッセージ
  error?: FieldError;
  // ラベル表示文字
  labelText: string;
  // inputType
  type: React.HTMLInputTypeAttribute;
  // プレースホルダー表示文字
  placeholderText: string;
  // データ名
  name: Path<TFormData>;
  // バリデーションオブジェクト
  validationRules: RegisterOptions<TFormData, Path<TFormData>>
}


// フォーム
const Form = <TFormData extends FieldValues>({serverErrorMessages, onSubmit, handleSubmit, register, inputs}: FormProps<TFormData>) => {
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverErrorMessages.length > 0 && <ErrorMessageList errorMessages={serverErrorMessages} />}

      {inputs.map(input => (
        <InputField key={input.name}
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