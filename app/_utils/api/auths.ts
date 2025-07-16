import { AUTH_URL } from "./apiUrl";
import { UserData } from "@/app/_interfaces/dto/response/UserData";
import { LoginFormData } from "@/app/_interfaces/dto/request/LoginFormData";
import { api } from "./api";
import qs from 'qs';


// ログインAPIリクエスト
export const login = async (loginForm: LoginFormData): Promise<UserData> => {
  try{
    const response = await api.post<UserData>(AUTH_URL.LOGIN, qs.stringify(loginForm), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data;
  }catch(error){
    throw error;
  }
};

// ログアウトAPIリクエスト
export const logout = async (): Promise<void> => {
  try{
    await api.post<UserData>(AUTH_URL.LOGOUT);
  }catch(error){
    throw error;
  }
};