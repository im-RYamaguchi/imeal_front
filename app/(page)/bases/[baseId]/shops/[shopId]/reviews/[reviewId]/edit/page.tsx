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
  const { shop,isShopLoading,handleEditReview, handleSubmit, serverErrorMessages, register, errors, fields } = useEditReview();

  //ローディング中の場合
  if(isShopLoading){
    return<Loading/>
  }

  // 飲食店が空の場合
  if(shop === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.SHOP.VARIABLE_NAME)} />
  }
  
  return (
    <div className={styles.reviewForm}>
      <h1>{PAGE_TITLES.EDIT_REVIEW}</h1>
      <h2>{PAGE_LABELS.SHOP.NAME}：{shop.name}</h2>
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
