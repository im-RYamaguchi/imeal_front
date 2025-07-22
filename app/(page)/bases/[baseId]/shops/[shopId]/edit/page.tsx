"use client"
import { GETTING_ERROR, PAGE_LABELS, PAGE_TITLES } from "@/app/_constants/pageText";
import { ShopFormData } from "@/app/_interfaces/dto/request/ShopFormData";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Form from "@/app/_components/form";
import { useEffect, useState } from "react";
import { FormInputData } from "@/app/_interfaces/FormInputData";
import { BLANK_MESSAGE, POSITIVE_INTEGER, POSITIVE_INTEGER_MESSAGE } from "@/app/_constants/validation";

import styles from "./EditShopPage.module.css"
import { extractErrorMessages } from "@/app/_utils/errorHandler";
import Loading from "@/app/_components/common/loading";
import ErrorMessage from "@/app/_components/error/errorMessage";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { useBase } from "@/app/_context/baseContext";
import { ShopData } from "@/app/_interfaces/dto/response/ShopData";
import { getShopById } from "@/app/_utils/api/shops";

const inputs: FormInputData<ShopFormData>[] = [
  // url
  {
    labelText: PAGE_LABELS.SHOP.URL,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.URL,
    name: 'url',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.URL)
    }
  },
  // 店名
  {
    labelText: PAGE_LABELS.SHOP.NAME,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.NAME,
    name: 'name',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.NAME)
    }
  },
  // 住所
  {
    labelText: PAGE_LABELS.SHOP.ADDRESS,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.ADDRESS,
    name: 'address',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.ADDRESS)
    }
  },

  // 拠点からの距離
  {
    labelText: PAGE_LABELS.SHOP.DIS,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.DIS,
    name: 'distance',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.DIS),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },

  // 拠点から徒歩何分
  {
    labelText: PAGE_LABELS.SHOP.MIN,
    type: 'number',
    placeholderText: PAGE_LABELS.SHOP.MIN,
    name: 'minutes',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.MIN),
      min: {
        value: POSITIVE_INTEGER,
        message: POSITIVE_INTEGER_MESSAGE
      }
    }
  },
  // 緯度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LAT,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LAT,
    name: 'location.lat',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LAT)
    }
  },

  // 経度
  {
    labelText: PAGE_LABELS.SHOP.LOCATION.LON,
    type: 'text',
    placeholderText: PAGE_LABELS.SHOP.LOCATION.LON,
    name: 'location.lon',
    validationRules: {
      required: BLANK_MESSAGE(PAGE_LABELS.SHOP.LOCATION.LON),
    }
  },
];


// グルメ編集ページ
const EditShopPage = () => {
  // 拠点取得
  const {base} = useBase();
  // 万が一拠点がnullだった場合
  if(base === null) return;

  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}, reset} = useForm<ShopFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // サーバーからのエラーメッセージリスト状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  const [initialShopForm, setInitialShopForm] = useState<ShopFormData | null>(null);
  // 飲食店をローディング中かどうか
  const [isShopLoading, setIsShopLoading] = useState<boolean>(true);
  // URLパラメータ取得
  const params = useParams();
  // 飲食店ID
  let shopId: number;

  // 編集処理
  const handleEdit = async (shopForm: ShopFormData) => {
    try{
      // 飲食店編集APIリクエスト

      // 飲食店詳細ページ移動
      router.push(PAGE_PATHS.SHOP_DETAIL(base.id, shopId))
    }catch(error){
      // エラーメッセージセット
      setServerErrorMessages(extractErrorMessages(error));
    }
  }

  // URLの飲食店ID変更時実行
  useEffect(() => {
    // 飲食店
    const fetchShop = async () => {
      // ローディング中
      setIsShopLoading(true);
      // URLから飲食店ID取得
      const paramShopId = params.shopId;
      // URLからIDが見つかり、String型の場合
      if(typeof paramShopId === 'string'){
        shopId = Number(paramShopId);    
      // 飲食店が空の場合
      }else{
        // nullセット
        setInitialShopForm(null);
        // ローディング終了
        setIsShopLoading(false);
        return;
      }
      try{
        // 飲食店取得APIリクエスト
        const shop = await getShopById(shopId);
        // 飲食店フォームセット
        setInitialShopForm({
          url: shop.url,
          name: shop.name,
          address: shop.address,
          distance: shop.distance,
          minutes: shop.minutes,
          baseId: shop.base.id,
          location: shop.location
        });
        
      }catch(error){
        // エラーメッセージコンソール表示
        console.error(extractErrorMessages(error));
      }
      // ローディング終了
      setIsShopLoading(false);

    };
    fetchShop();
  }, [params.shopId]);

  // 飲食店取得時実行
  useEffect(() => {
    // 飲食店情報がある場合
    if(initialShopForm){
      // フォームリセット
      reset(initialShopForm);
    }
  }, [initialShopForm, reset]);

  // 飲食店をローディング中の場合
  if(isShopLoading){
    return <Loading />;
  }

  // 飲食店が空の場合
  if(initialShopForm === null){
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