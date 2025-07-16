"use client"
import { createContext, useContext, useState } from "react";
import { UserData } from "../_interfaces/dto/response/UserData";
import { LoginFormData } from "../_interfaces/dto/request/LoginFormData";
import { useRouter } from "next/navigation";
import * as auths from "../_utils/api/auths";

interface UserContextType{
  user: UserData | null;
  isUserLoading: boolean;
  login: (loginForm: LoginFormData) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({children}: {children: React.ReactNode}) => {
    // ログイン中のユーザー
  const [user, setUser] = useState<UserData | null>(null);
  // 取得状況
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  
  // ログイン
  const login = async (loginForm: LoginFormData) => {
    try{
      // // ログインAPIリクエスト
      const user = await auths.login(loginForm);
      // ユーザーセット
      setUser(user);
      
    }catch(error){
      throw error;
    }
  };

  // ログアウト
  const logout = async () => {
    try{
      // ログアウトAPIリクエスト
      await auths.logout();
      // ユーザーセット解除
      setUser(null);
    }catch(error){
      throw error;
    }
  }

  return(
    <UserContext.Provider value={{user, isUserLoading, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if(context === undefined){
    throw new Error('UserContextが空です');
  }
  return context;
}

export default UserProvider;

