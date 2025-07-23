import { FieldError, FieldErrors, FieldValues, Path } from "react-hook-form";

// errors.object.nameを取得できるようにする関数
export const getNestedError = <T extends FieldValues>(errors: FieldErrors<T>, path: Path<T>): FieldError | undefined => {
  // object.name -> [object, ..., name]に変換
  const pathParts = path.split('.') as (keyof T)[];

  // オブジェクトの現在地
  let current: any = errors;
  // パス配列ループ
  for(const part of pathParts){
    // パスがnullではなく、オブジェクトで、次のキーが現在のオブジェクトに存在する場合
    if(current && typeof current === 'object' && part in current){
      current = current[part];
    }else{
      return undefined;
    }
  }
  return current;
}