import { USERS_URL } from "./apiUrl";
import { UserData } from "@/app/_interfaces/dto/response/UserData";
import { SignUpFormData } from "@/app/_interfaces/dto/request/SignUpFormData";
import { api } from "./api";

// ユーザー作成APIリクエスト
export const createUser = async (signUpForm: SignUpFormData): Promise<UserData> => {
  try{
    const response = await api.post<UserData>(USERS_URL.CREATE, signUpForm);
    return response.data;
  }catch(error){
    throw error;
  }
}