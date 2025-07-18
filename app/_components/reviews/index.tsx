import { ReviewData } from "@/app/_interfaces/dto/response/ReviewData";
import Review from "./Review";

import styles from "./Reviews.module.css"

interface ReviewsProps{
  reviews: ReviewData[];
  direction?: 'row' | 'column';
  isAddingShop?:boolean;
  handleDelete: (reviewId: number) => void;
}

// 口コミリスト表示
const Reviews = ({reviews, direction, isAddingShop, handleDelete}: ReviewsProps) => {
  const classNames = [styles.reviews];
  if(direction === 'column'){
    classNames.push(styles.column);
  }
  return(
    <div className={classNames.join(' ')}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} isAddingShop={isAddingShop} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Reviews;