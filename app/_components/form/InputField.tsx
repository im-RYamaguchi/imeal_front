import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

import ErrorMessage from "../error/errorMessage";

import styles from "./Form.module.css";

interface InputFieldProps<TFormData extends FieldValues>{
  label: string;
  name: Path<TFormData>
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  error?: FieldError;
  register: UseFormRegister<TFormData>;
  validationRules: RegisterOptions<TFormData, Path<TFormData>>;
}

// inputタイプのフィールド
const InputField = <TFormData extends FieldValues>({label, name, type, placeholder, register, validationRules, error}: InputFieldProps<TFormData>) => {
  return(
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      {error?.message && <ErrorMessage errorMessage={error.message} />}
      <input type={type} id={name} placeholder={placeholder}
        {...register(name, validationRules)}
      />
    </div>
  );
};

export default InputField;