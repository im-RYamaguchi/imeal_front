// userバリデーション
export const NAME_MAX_LENGTH = 10;
export const EMAIL_MAX_LENGTH = 256;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;
// メールアドレスの形式を検証するための正規パターン
// (@ or space 以外の文字) + (@がある) + (@ or space 以外の文字) + (.がある) + (@ or space 以外の文字)
export const EMAIL_PATTERN: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// shopバリデーション
export const POSITIVE_INTEGER = 0

// 空の場合のメッセージ
export const BLANK_MESSAGE = (key: string) => `${key}を入力してください`;
// 最大文字より長い場合のメッセージ
export const MAX_LENGTH_MESSAGE = (key: string, value: number) => `${key}は${value}文字以下で入力してください`;
// 最小文字より短い場合のメッセージ
export const MIN_LENGTH_MESSAGE = (key: string, value: number) => `${key}は${value}文字以上で入力してください`;
//評価０以下の場合のメッセージ
export const MIN_EVALUATION_MESSAGE = (key: string, value: number) => `${key}は${value}以上で入力してください`;
//評価５以下の場合のメッセージ
export const MAX_EVALUATION_MESSAGE = (key: string, value: number) => `${key}は${value}以下で入力してください`;
// パターンと一致しない場合のメッセージ
export const PATTERN_MESSAGE = (key: string) => `${key}形式で入力してください`;
// パスワードと確認用パスワードが一致しない場合のメッセージ
export const PASSWORD_CONFIRMATION_MESSAGE = 'パスワードと確認用パスワードが一致しませんでした';
export const POSITIVE_INTEGER_MESSAGE = '正の整数で入力してください'