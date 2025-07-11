// ページパス定数
export const PAGE_PATHS = {
  // ホームページ
  HOME: '/',
  // トップページ
  TOP: (baseId: number) => `/bases/${baseId}/top`,
  // グルメ一覧ページ
  SHOPS: (baseId: number) => `/bases/${baseId}/shops`,
  // グルメ・口コミ投稿ページ
  CREATE_SHOP_AND_REVIEW: (baseId: number) => `/bases/${baseId}/shops/create`,
  // グルメ詳細ページ
  SHOP_DETAIL: (baseId: number) => `/bases/${baseId}/shops`,
  // グルメ編集ページ
  EDIT_SHOP: (baseId: number, shopId: number) => `/bases/${baseId}/shops/${shopId}/edit`,
  // 口コミ投稿ページ
  CREATE_REVIEW: (baseId: number, shopId: number) => `/bases/${baseId}/shops/${shopId}/reviews/create`,
  // 口コミ編集ページ
  EDIT_REVIEW: (baseId: number, shopId: number, reviewId: number) => `/bases/${baseId}/shops/${shopId}/review/${reviewId}/edit`,
  // サインアップページ
  SIGN_UP: '/sign_up',
  // ログインページ
  LOGIN: '/login',
  // ユーザーページ
  USER: (userId: number) => `/users/${userId}`,
  // ユーザー編集ページ
  EDIT_USER: (userId: number) => `/users/${userId}/edit`
};