import axios from "axios";
import { BASE_URL, USERS_URL } from "./apiUrl";
import { UserData } from "@/app/_interfaces/dto/response/UserData";

// API定義
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

// ユーザー作成APIリクエスト
export const createUser = async (signUpForm: SignUpFormData): Promise<UserData> => {
  try{
    const response = await api.post<UserData>(USERS_URL.CREATE, signUpForm);
    return response.data;
  }catch(error){
    throw error;
  }
}