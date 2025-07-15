import { AUTH_URL } from "./apiUrl";
import { UserData } from "@/app/_interfaces/dto/response/UserData";
import { LoginFormData } from "@/app/_interfaces/dto/request/LoginFormData";
import { api } from "./api";


// ログインAPIリクエスト
export const login = async (loginForm: LoginFormData): Promise<UserData> => {
  try{
    const response = await api.post<UserData>(AUTH_URL.LOGIN, loginForm);
    return response.data;
  }catch(error){
    throw error;
  }
};

// ログアウトAPIリクエスト