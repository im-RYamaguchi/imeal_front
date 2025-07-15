"use client"
import { bases as testBases } from "../_test/testData";

import React, { createContext, useContext, useEffect, useState } from "react"
import { useParams } from "next/navigation";

import { BaseData } from "../_interfaces/dto/response/BaseData";

// コンテキストの型
interface BaseContextType {
  bases: BaseData[];
  base: BaseData;
  setBaseById: (id: number) => void;
  isBaseLoading: boolean;
}

// コンテキスト作成
const BaseContext = createContext<BaseContextType | undefined>(undefined);

// コンテキストプロバイダー
const BaseProvider = ({children}: {children: React.ReactNode}) => {
  // 保存されている拠点
  const bases = testBases;
  // 選択された拠点状態
  const [base, setBase] = useState<BaseData>(bases[0]);
  // 取得状態
  const [isBaseLoading, setIsBaseLoading] = useState<boolean>(true);
  // URL情報オブジェクト
  const params = useParams();

  // IDから拠点セット
  const setBaseById = (id: number) => {
    const base = bases.find(base => base.id === id);
    if(base === undefined){
      throw new Error('拠点が空です');
    }
    setBase(base);
  }

  // URLパラメーター、選択されたID変更時実行
  useEffect(() => {
    setIsBaseLoading(true);
    // URLから拠点ID取得
    const paramBaseId = params.baseId;
    // String型の場合
    if(typeof paramBaseId === 'string'){
      const baseId = Number(paramBaseId);
      // 拠点が変更された場合
      if(base.id !== baseId){
        setBaseById(baseId);
      }
    }
    setIsBaseLoading(false);
  }, [params, base.id]);

  return(
    <BaseContext.Provider value={{bases, base, setBaseById, isBaseLoading}}>
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