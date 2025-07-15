export const BASE_URL = 'http://localhost:8080/api'

// APIパス
// 認証
export const AUTH_URL = {
  // ログイン
  LOGIN: '/login',
  // ログアウト
  LOGOUT: '/logout'
}

// ユーザー
export const USERS_URL = {
  // 作成
  CREATE: '/users'
} as const;