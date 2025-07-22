"use client"
import { PAGE_TITLES } from "@/app/_constants/pageText";
import Form from "@/app/_components/form";
import { useCreateShopAndReview } from "@/app/_hocks/useCreateShopAndReview";
import { useBase } from "@/app/_context/baseContext";
import styles from "./CreateShopAndReviewPage.module.css"

// グルメ・口コミ投稿ページ
const CreateShopAndReviewPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;
  // グルメ・口コミ投稿フック
  const {serverErrorMessages, handleCreateShopAndReview, register, handleSubmit, errors, inputs} = useCreateShopAndReview({base: base});

  return(
    <div className={styles.shopAndReviewForm}>
      <h1>{PAGE_TITLES.CREATE_SHOP_AND_REVIEW}</h1>
      <Form 
        onSubmit={handleCreateShopAndReview}
        handleSubmit={handleSubmit}
        serverErrorMessages={serverErrorMessages}
        register={register}
        errors={errors}
        inputs={inputs}
      />
    </div>
  );
};

export default CreateShopAndReviewPage;