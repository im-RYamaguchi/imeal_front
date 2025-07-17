import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import Review from "./Review";

import styles from "./Reviews.module.css"

interface ReviewsProps{
  reviews: ReviewData[];
}

// 口コミリスト表示
const Reviews = ({reviews}: ReviewsProps) => {
  return(
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;