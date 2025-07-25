"use client"

import { GETTING_ERROR, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import { useEditReview } from "@/app/_hocks/useEditReview";
import Form from "@/app/_components/form";
import styles from './EditReviewPage.module.css';
import ErrorMessage from "@/app/_components/error/errorMessage";
import Loading from "@/app/_components/common/loading";

// 口コミ編集ページ
const EditReviewPage = () => {

  //口コミ編集フック
  const { review,isReviewLoading,handleEditReview, handleSubmit, serverErrorMessages, register, errors, fields } = useEditReview();

  //ローディング中の場合
  if(isReviewLoading){
    return<Loading/>
  }

  if (!review) {
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.REVIEW.VARIABLE_NAME)} />;
  }

  
  return (
    <div className={styles.reviewForm}>
      <h1>{PAGE_TITLES.EDIT_REVIEW}</h1>
       <h2>{PAGE_LABELS.SHOP.NAME}：{review.shop.name}</h2> 
      <Form
        onSubmit={handleEditReview}
        handleSubmit={handleSubmit}
        serverErrorMessages={serverErrorMessages}
        register={register}
        errors={errors}
        fields={fields}
      />
    </div>
  );
};

export default EditReviewPage;
