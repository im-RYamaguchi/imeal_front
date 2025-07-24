// userバリデーション
export const NAME_MAX_LENGTH = 10;
export const EMAIL_MAX_LENGTH = 256;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;
// メールアドレスの形式を検証するための正規パターン
// (@ or space 以外の文字) + (@がある) + (@ or space 以外の文字) + (.がある) + (@ or space 以外の文字)
export const EMAIL_PATTERN: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// shopバリデーション
export const POSITIVE_INTEGER = 0;

// locationバリデーション
export const LAT_MIN = -90;
export const LAT_MAX = 90;
export const LON_MIN = -180;
export const LON_MAX = 180;
export const LOCATION_DECIMAL = 6;

// reviewバリデーション
export const EVALUATION_MIN = 0;
export const EVALUATION_MAX = 5;
export const EVALUATION_VALIDATION_MESSAGE = `${EVALUATION_MIN}～${EVALUATION_MAX}で入力してください`;

// 自然数を検証するための正規パターン
export const  NATURAL_PATTERN : RegExp = /^[1-9]\d*$/;
// 小数点以下何桁以内かを検証するための正規パターン
export const DECIMAL_PATTERN = (decimal: number): RegExp => new RegExp(`^-?\\d+(\\.\\d{1,${decimal}})?$`);


// 空の場合のメッセージ
export const BLANK_MESSAGE = (key: string) => `${key}を入力してください`;
// 最大文字より長い場合のメッセージ
export const MAX_LENGTH_MESSAGE = (key: string, value: number) => `${key}は${value}文字以下で入力してください`;
// 最小文字より短い場合のメッセージ
export const MIN_LENGTH_MESSAGE = (key: string, value: number) => `${key}は${value}文字以上で入力してください`;
//最小値より小さい場合のメッセージ
export const MIN_NUMBER_MESSAGE = (key: string, value: number) => `${key}は${value}以上で入力してください`;
//最大値より大きい場合のメッセージ
export const MAX_NUMBER_MESSAGE = (key: string, value: number) => `${key}は${value}以下で入力してください`;
// パターンと一致しない場合のメッセージ
export const PATTERN_MESSAGE = (key: string) => `${key}形式で入力してください`;
// パスワードと確認用パスワードが一致しない場合のメッセージ
export const PASSWORD_CONFIRMATION_MESSAGE = 'パスワードと確認用パスワードが一致しませんでした';
// 正の整数でない場合のメッセージ
export const NATURAL_PATTERN_MESSAGE = '正の整数で入力してください'
// 小数点以下桁数が範囲外の場合のメッセージ
export const DECIMAL_MESSAGE = (decimal: number) => `小数点以下${decimal}桁以内で入力してください`; 

