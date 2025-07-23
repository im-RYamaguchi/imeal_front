"use client"

import { PAGE_TITLES } from "@/app/_constants/pageText";
import { useCreateReview } from "@/app/_hocks/useReview";
import { base } from "@/app/_test/testData";
import Form from "@/app/_components/form";


// 口コミ投稿ページ
const CreateReviewPage = () => {

  const {handleCreateReview,handleSubmit,serverErrorMessages,register,errors,inputs} = useCreateReview({base: base});
  return (
    <div>
      <h1>{PAGE_TITLES.CREATE_REVIEW}</h1>
      <Form
        onSubmit={handleCreateReview}
        handleSubmit={handleSubmit}
        serverErrorMessages={serverErrorMessages}
        register={register}
        errors={errors}
        inputs={inputs}
      /> 
    </div>
  );
};

export default CreateReviewPage;