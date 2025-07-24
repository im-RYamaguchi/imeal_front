import { ShopFormData } from "@/app/_interfaces/dto/request/ShopFormData";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { extractErrorMessages } from "@/app/_utils/errorHandler";
import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { editShop, getShopById } from "@/app/_utils/api/shops";
import { ShopData } from "../_interfaces/dto/response/ShopData";
import { shopFormFields } from "../_constants/formConfigs/shopFormFields";

export const useEditShop = () => {
  // フォームオブジェクト
  const {register, handleSubmit, formState: {errors}, reset} = useForm<ShopFormData>();
  // ルーターオブジェクト
  const router = useRouter();
  // サーバーからのエラーメッセージリスト状態管理
  const [serverErrorMessages, setServerErrorMessages] = useState<string[]>([]);
  const [shop, setShop] = useState<ShopData | null>(null);
  // 飲食店をローディング中かどうか
  const [isShopLoading, setIsShopLoading] = useState<boolean>(true);
  // URLパラメータ取得
  const params = useParams();
  // フォーム要素取得
  const fields = shopFormFields;

  // 編集処理
  const handleEdit = async (shopForm: ShopFormData) => {
    if(shop === null) return; 
    try{
      // 飲食店編集APIリクエスト
      const responseShop = await editShop(shopForm, shop.id);
      // 飲食店詳細ページ移動
      router.push(PAGE_PATHS.SHOP_DETAIL(shop.base.id, shop.id))
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
      let shopId: number;
      // URLからIDが見つかり、String型の場合
      if(typeof paramShopId === 'string'){
        shopId = Number(paramShopId);    
      // 飲食店が空の場合
      }else{
        // nullセット
        setShop(null);
        // ローディング終了
        setIsShopLoading(false);
        return;
      }
      try{
        // 飲食店取得APIリクエスト
        const shop = await getShopById(shopId);
        // 飲食店セット
        setShop(shop);
        
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
    if(shop){
      // フォームリセット
      reset({
        url: shop.url,
        name: shop.name,
        address: shop.address,
        distance: shop.distance,
        minutes: shop.minutes,
        baseId: shop.base.id,
        location: shop.location
      });
    }
  }, [shop, reset]);

  return {
    shop,
    isShopLoading,
    serverErrorMessages,
    handleEdit,
    handleSubmit,
    register,
    errors,
    fields
  };
}