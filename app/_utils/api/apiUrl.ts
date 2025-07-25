import { PAGE_SUB_TITLES } from "@/app/_constants/pageText";

export const BASE_URL = 'http://localhost:8080/api'

// APIパス
// 認証
export const AUTH_URL = {
  // ログイン
  LOGIN: '/login',
  // ログアウト
  LOGOUT: '/logout'
};

// ユーザー
export const USERS_URL = {
  // 作成
  CREATE: '/users'
} as const;

// 拠点
export const BASES_URL = {
  // 取得
  GET: '/bases'
};

// 飲食店
export const SHOPS_URL = {
  // 取得
  GET: (baseId?: number) => `/shops?baseId=${baseId}`,
  GET_BY_ID: (shopId: number) => `/shops/${shopId}`,
  GET_WITH_REVIEWS: (shopId: number) => `/shops/${shopId}/reviews`,
  // 作成
  POST: '/shops',
  // 編集
  PUT: (shopId: number) => `/shops/${shopId}`,
  // 削除
  DELETE: (shopId: number) => `/shops/${shopId}`
}
//口コミ
export const REVIEWS_URL = {
  // 取得
  GET: (baseId?: number, limit?: number, sort?: string) => `/reviews?baseId=${baseId}&limit=${limit}&sort=${sort}`,
  // 作成
  CREATE: '/reviews',
  //編集
  PUT:(reviewId: number) => `/reviews/${reviewId}`,
  // 削除
  DELETE: (reviewId: number) => `/reviews/${reviewId}`
};