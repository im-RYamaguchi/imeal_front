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
  GET: (baseId?: number) => `/shops?baseId={${baseId}}`,
  GET_WITH_REVIEWS: (shopId: number) => `/shops/${shopId}/reviews`
}