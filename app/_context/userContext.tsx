"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "../_interfaces/dto/response/UserData";
import { LoginFormData } from "../_interfaces/dto/request/LoginFormData";
import * as auths from "../_utils/api/auths";
import { extractErrorMessages } from "../_utils/errorHandler";

interface UserContextType{
  user: UserData | null;
  isUserLoading: boolean;
  login: (loginForm: LoginFormData) => void;
  logout: () => void;
}

// コンテキスト作成
const UserContext = createContext<UserContextType | undefined>(undefined);

// コンテキストプロバイダー
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
      // ローカルストレージに保存
      localStorage.setItem('user', JSON.stringify(user));
    }catch(error){
      throw error;
    }
  };

  // ログアウト
  const logout = async () => {
    try{
      // ログアウトAPIリクエスト
      await auths.logout();
      // ユーザーリセット
      setUser(null);
      // ローカルストレージリセット
      localStorage.removeItem('user');
    }catch(error){
      throw error;
    }
  }

  // マウント時実行
  useEffect(() => {
    setIsUserLoading(true);
    // ローカルストレージのユーザー情報取得
    const storedUser = localStorage.getItem('user');
    // ユーザーが保存されていた場合
    if(storedUser){
      try{
        // JSON → オブジェクト型変換
        const parsedUser = JSON.parse(storedUser);
        // 型が正しいかチェック
        if(
          typeof parsedUser === 'object' &&
          parsedUser !== null &&
          'id' in parsedUser &&
          'name' in parsedUser
        ){
          setUser(parsedUser);
        }
      }catch(error){
        // エラーメッセージコンソール表示
        console.error(extractErrorMessages(error));
      }
    }
    setIsUserLoading(false);
  },[])

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

