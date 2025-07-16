// 拠点のAPIの型

import { BaseData } from "../dto/response/BaseData";

// 拠点リスト取得APIのレスポンス全体の型
export interface BasesApiResponse {
  bases: BaseData[];
}
