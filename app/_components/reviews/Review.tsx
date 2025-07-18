import { PAGE_LABELS } from "@/app/_constants/pageText";
import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";

import styles from "./Reviews.module.css"
import LinkButton from "../button/linkButton";
import { PAGE_PATHS } from "@/app/_constants/pagePath";

interface ReviewProps{
  review: ReviewData;
  isAddingShop?: boolean;
}

// 口コミ一件表示
const Review = ({review, isAddingShop}: ReviewProps) => {
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
    </div>
  );
};

export default Review;