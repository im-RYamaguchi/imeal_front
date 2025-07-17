import { ShopData } from "./ShopData";
import { UserData } from "./UserData";

export interface ReviewData{
  // ID
  id: number;
  // 写真パス
  img_path: string;
  // コメント
  comment: string;
  // 金額
  amount: number;
  // 評価（0～5）
  evaluation: number;
  // 投稿日
  createdAt: string;
  // 飲食店
  shop: ShopData;
  // ユーザー
  user: UserData;
  
}