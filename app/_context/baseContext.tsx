"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "next/navigation";

import { BaseData } from "../_interfaces/dto/response/BaseData";
import { extractErrorMessages } from "../_utils/errorHandler";
import { getBases } from "../_utils/api/bases";

// コンテキストの型
interface BaseContextType {
  bases: BaseData[] | null;
  base: BaseData | null;
  isBaseLoading: boolean;
}

// コンテキスト作成
const BaseContext = createContext<BaseContextType | undefined>(undefined);

// コンテキストプロバイダー
const BaseProvider = ({children}: {children: React.ReactNode}) => {
  // 保存されている拠点
  const [bases, setBases] = useState<BaseData[] | null>(null);
  // 選択された拠点状態
  const [base, setBase] = useState<BaseData | null>(null);
  // 取得状態
  const [isBaseLoading, setIsBaseLoading] = useState<boolean>(true);
  // URL情報オブジェクト
  const params = useParams();

  // マウント時実行
  useEffect(() => {
    // 拠点情報取得
    const fetchBases = async () => {
      try{
        // ローディング中
        setIsBaseLoading(true);
        // APIリクエスト
        const bases = await getBases();
        // 拠点セット
        setBases(bases);
        // 拠点が空でない場合、拠点初期値セット
        if(bases.length > 0){
          setBase(bases[0]);
        }
      }catch(error){
        // エラー表示
        console.error(extractErrorMessages(error));
      }
    };
    fetchBases();
  }, []);

  // URLパラメーター、選択されたID変更時実行
  useEffect(() => {
    // 拠点が取得できなかった場合
    if(bases === null) return;

    // ローディング中
    setIsBaseLoading(true);
    // URLから拠点ID取得
    const paramBaseId = params.baseId;
    let baseId: number;
    // URLからIDが見つかり、String型の場合
    if(typeof paramBaseId === 'string'){
      baseId = Number(paramBaseId);    
    // 拠点が空の場合
    }else{
      // ローディング終了
      setIsBaseLoading(false);
      return;
    }
    // IDが一致するベース取得
    const base = bases.find(base => base.id === baseId);
    //拠点セット（見つからなかった場合はnull）
    setBase(base ?? null);
    setIsBaseLoading(false);
  }, [params.baseId, bases]);

  return(
    <BaseContext.Provider value={{bases, base, isBaseLoading}}>
      {children}
    </BaseContext.Provider>
  )
}

export const useBase = () => {
  const context = useContext(BaseContext);
  if(context === undefined){
    throw new Error('BaseContextが空です');
  }
  return context;
}

export default BaseProvider;