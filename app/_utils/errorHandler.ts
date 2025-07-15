import axios from "axios";
import { ErrorData } from "../_interfaces/dto/response/ErrorData";

// エラーメッセージ抽出
export const extractErrorMessages = (error: unknown): string[] => {
  console.log(error);
  // 想定内のエラー（API通信に関するエラー）
  if(axios.isAxiosError<ErrorData>(error) && error.response){
    const messages = error.response.data?.messages;
    if(Array.isArray(messages) && messages.length > 0){
      return messages;
    }
  }
  // 想定外のエラー（コードミス）
  return ['不明なエラーが発生しました。'];
}