// userバリデーション
export const NAME_MAX_LENGTH = 10;
export const EMAIL_MAX_LENGTH = 256;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;
// メールアドレスの形式を検証するための正規パターン
// (@ or space 以外の文字) + (@がある) + (@ or space 以外の文字) + (.がある) + (@ or space 以外の文字)
export const EMAIL_PATTERN: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

