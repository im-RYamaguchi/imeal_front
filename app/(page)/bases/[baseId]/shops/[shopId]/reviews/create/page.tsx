"use client"

import { GETTING_ERROR, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import { useCreateReview } from "@/app/_hocks/useCreateReview";
import Form from "@/app/_components/form";

import styles from './CreateReviewPage.module.css';
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";

// 口コミ投稿ページ
const CreateReviewPage = () => {

  // 口コミ投稿フック
  const {shop, isShopLoading, handleCreateReview,handleSubmit, serverErrorMessages, register, errors, fields} = useCreateReview();

  // ローディング中の場合
  if(isShopLoading){
    return <Loading />
  }

  // 飲食店が空の場合
  if(shop === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.SHOP.VARIABLE_NAME)} />
  }

  return (
    <div className={styles.reviewForm}>
      <h1>{PAGE_TITLES.CREATE_REVIEW}</h1>
      <h2>{PAGE_LABELS.SHOP.NAME}：{shop.name}</h2>
      <Form
        onSubmit={handleCreateReview}
        handleSubmit={handleSubmit}
        serverErrorMessages={serverErrorMessages}
        register={register}
        errors={errors}
        fields={fields}
      /> 
    </div>
  );
};

export default CreateReviewPage;