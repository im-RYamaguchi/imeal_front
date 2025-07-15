import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface FormInputData<TFormData extends FieldValues>{
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