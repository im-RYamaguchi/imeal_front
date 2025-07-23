import { HANDLE_NAME, PAGE_LABELS } from "@/app/_constants/pageText";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";

import styles from "./Reviews.module.css"
import LinkButton from "../button/linkButton";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import ClickButton from "../button/clickButton";

interface ReviewProps{
  review: ReviewData;
  isAddingShop?: boolean;
  handleDelete: (reviewId: number) => void; 
  
}

// 口コミ一件表示
const Review = ({review, isAddingShop, handleDelete}: ReviewProps) => {
  // 削除ボタンクリック時
  const onClick = () => {
    // 口コミ削除処理
    handleDelete(review.id);
  };

  return(
    <div className={styles.review}>
      <img src={review.img_path} alt="口コミ" style={{width: '25vw'}}/>
      {isAddingShop && 
        <LinkButton text={`${PAGE_LABELS.SHOP.NAME}：${review.shop.name}`} href={PAGE_PATHS.SHOP_DETAIL(review.shop.base.id, review.shop.id)} styleType="shopName" />
      }
      <p>{PAGE_LABELS.REVIEW.CREATED_AT}：{review.createdAt}</p>
      <p>{PAGE_LABELS.REVIEW.USER}：{review.user.name}</p>
      <p>{PAGE_LABELS.REVIEW.COMMENT}：{review.comment}</p>
      <p>{PAGE_LABELS.REVIEW.AMOUNT(review.amount)}</p>
      <p>{PAGE_LABELS.REVIEW.EVALUATION}：{review.evaluation}</p>
      <LinkButton text={HANDLE_NAME.EDIT} href={PAGE_PATHS.EDIT_REVIEW(review.shop.base.id, review.shop.id, review.id)} />
      <ClickButton text={HANDLE_NAME.DELETE} onClick={onClick} />
    </div>
  );
};

export default Review;