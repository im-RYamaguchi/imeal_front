//口コミフォーム型
export interface ReviewFormData{
  //写真のパス
  img: ImageData, 
  //コメント
  comment: String,
  //金額
  amount: number,
  //評価
  evaluation: number,
  //店舗
  shopId: number,
}