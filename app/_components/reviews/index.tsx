import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import Review from "./Review";

import styles from "./Reviews.module.css"

interface ReviewsProps{
  reviews: ReviewData[];
  direction?: 'row' | 'column';
}

// 口コミリスト表示
const Reviews = ({reviews, direction}: ReviewsProps) => {
  const classNames = [styles.reviews];
  if(direction === 'column'){
    classNames.push(styles.column);
  }
  return(
    <div className={classNames.join(' ')}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;