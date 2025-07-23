"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import Form from "@/app/_components/form";
import ErrorMessage from "@/app/_components/error/errorMessage";
import Loading from "@/app/_components/common/loading";
import { useBase } from "@/app/_context/baseContext";
import { useEditShop } from "@/app/_hocks/useEditShop";

import styles from "./EditShopPage.module.css"

// グルメ編集ページ
const EditShopPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;

  // グルメ編集フック
  const {
    shop, isShopLoading,
    serverErrorMessages,
    handleEdit, handleSubmit, register, errors, 
    inputs
  } = useEditShop();


  // 飲食店をローディング中の場合
  if(isShopLoading){
    return <Loading />;
  }

  // 飲食店が空の場合
  if(shop === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.SHOP.VARIABLE_NAME)} />
  }

  return(
    <div className={styles.shopForm}>
      <h1>{PAGE_TITLES.EDIT_SHOP}</h1>
      <Form 
        serverErrorMessages={serverErrorMessages}
        onSubmit={handleEdit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        inputs={inputs}
      />
    </div>
  );
};

export default EditShopPage;