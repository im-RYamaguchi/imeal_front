import { ReviewData } from "./ReviewData";
import { ShopData } from "./ShopData";

export interface ShopWithReviewsData extends ShopData{
  reviews: ReviewData[];
}