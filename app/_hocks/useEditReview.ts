"use client";

import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { reviewFormFields } from "../_constants/formConfigs/reviewFormFields";
import { ReviewFormData } from "../_interfaces/dto/request/ReviewFormData";
import { useEffect, useState } from "react";
import { ShopData } from "../_interfaces/dto/response/ShopData";


import { PAGE_PATHS } from "../_constants/pagePath";
import { extractErrorMessages } from "../_utils/errorHandler";
import { getShopById, getShopWithReviews } from "../_utils/api/shops";
import ShopDetailPage from "../(page)/bases/[baseId]/shops/[shopId]/page";
import { editReview, findReviewById, getReviews } from "../_utils/api/reviews";
import { ReviewData } from "../_interfaces/dto/response/ReviewData";
import Review from "../_components/reviews/Review";

export const useEditReview = () => {
  //フォームオブジェクト
  const { register, handleSubmit, formState: { errors } ,reset} = useForm<ReviewFormData>();

  //サーバーエラーメッセージ状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  //初期値の設定 
  const [review, setReview] = useState<ReviewData | null>(null);
  // ローディング中かどうか
  const [isReviewLoading, setReviewLoading] = useState<boolean>(true);
  // ルーターオブジェクト
  const router = useRouter();
  // URLパラメータオブジェクト
  const params = useParams();
  // フォーム要素取得
  const fields = reviewFormFields;

  //口コミ更新処理
  const handleEditReview = async (reviewForm: ReviewFormData) => {
    if (review === null ) return;
    try {
      //口コミ更新API
      const responseReview = await editReview(review.id, reviewForm);
      // グルメ詳細ページ遷移
      router.push(PAGE_PATHS.SHOP_DETAIL(review.shop.base.id, review.shop.id));
    } catch (error) {
      setServerErrorMessages(extractErrorMessages(error));
    }
  };


  useEffect(() => {
    //レビューのID取得処理
    const fetchReviewData = async () => {
      //ローディング中
      setReviewLoading(true);
      //URLからレビューID取得
      const paramReviewId = params.reviewId;
      let reviewId: number;
      //URLからIDが見つかり、Strin型の場合
      if (typeof paramReviewId === 'string') {
        reviewId = Number(paramReviewId);

        console.log("reviewId:", reviewId);
      } else {//拠点が空の場合
        setReview(null);
        //ローディング終了
        setReviewLoading(false);
        return;
      }
      //レビューを取得するAPI
      const review =await findReviewById(reviewId);

      reset(review);
      //レビューセット
      setReview(review);
      setReviewLoading(false);
    }
    fetchReviewData();
  }, [params.reviewId]);

  return { review, isReviewLoading, handleEditReview, handleSubmit, serverErrorMessages, register, errors, fields }

}

