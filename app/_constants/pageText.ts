// アプリ名
export const APP_NAME = 'IMeal';

// ページ名定数
export const PAGE_TITLES = {
  // ホームページ
  HOME: 'ホームページ',
  // トップページ
  TOP: 'トップページ',
  // グルメ一覧ページ
  SHOPS: 'グルメ一覧ページ',
  // グルメ・口コミ投稿ページ
  CREATE_SHOP_AND_REVIEW: 'グルメ・口コミ投稿ページ',
  // グルメ詳細ページ
  SHOP_DETAIL: `グルメ詳細ページ`,
  // グルメ編集ページ
  EDIT_SHOP: 'グルメ編集ページ',
  // 口コミ投稿ページ
  CREATE_REVIEW: '口コミ投稿ページ',
  // 口コミ編集ページ
  EDIT_REVIEW: '口コミ編集ページ',
  // サインアップページ
  SIGN_UP: 'サインアップページ',
  // ログインページ
  LOGIN: 'ログインページ',
  // ユーザーページ
  USER: 'ユーザーページ',
  // ユーザー編集ページ
  EDIT_USER: 'ユーザー編集ページ'
} as const;

// ページサブタイトル
export const PAGE_SUB_TITLES = {
  TOP: {
    SHOPS_MAP: 'グルメマップ',
    RECENT_REVIEWS: '最近の口コミ'
  },
  SHOP_DETAIL: {
    SHOP_INFO: 'グルメ情報',
    REVIEWS: '口コミ一覧'
  }
}

// ラベル名定数
export const PAGE_LABELS = {
  BASE: {
    VARIABLE_NAME: '拠点',
    NAME: '拠点名'
  },
  SHOP: {
    VARIABLE_NAME: '飲食店',
    NAME: '飲食店名',
    URL: 'GoogleMapのURL',
    ADDRESS: '住所',
    DIS: '拠点からの距離(m)',
    MIN: '拠点から徒歩何分',
    DISTANCE: (key: number) => `距離${key}m`,
    MINUTES: (key: number) => `徒歩${key}分`,
    LOCATION: {
      LAT: '緯度',
      LON: '経度'
    }
  },
  REVIEW: {
    VARIABLE_NAME: '口コミ',
    COMMENT: 'コメント',
    AMO: '金額',
    AMOUNT: (key: number) => `${key}円`,
    EVALUATION: '評価',
    CREATED_AT: '投稿日',
    USER:'投稿者'
  },
  SIGN_UP_FORM: {
    NAME: '名前',
    EMAIL: 'メールアドレス',
    PASSWORD: 'パスワード',
    PASSWORD_CONFIRMATION: '確認用パスワード'
  },
  LOGIN_FORM: {
    EMAIL: 'メールアドレス',
    PASSWORD: 'パスワード',
  }
} as const;

// 処理名定数
export const HANDLE_NAME = {
  LOGOUT: 'ログアウト',
  SUBMIT: '送信'
} as const;

// 取得失敗定数
export const GETTING_ERROR = (key: string) => `${key}が取得できませんでした`;

// ヘッダー挨拶テキスト
export const WELCOME_MESSAGE = (name: string) => `${name}さん、ようこそ！`;