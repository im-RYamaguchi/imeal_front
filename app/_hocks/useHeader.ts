import { PAGE_PATHS } from "@/app/_constants/pagePath";
import { OptionData } from "@/app/_interfaces/OptionData";
import { BaseData } from "@/app/_interfaces/dto/response/BaseData";
import { useRouter } from "next/navigation";
import { logout } from "@/app/_utils/api/auths";
import { extractErrorMessages } from "@/app/_utils/errorHandler";

interface useHeaderParams{
  bases: BaseData[];
}

// ヘッダーフック
export const useHeader = ({bases}: useHeaderParams) => {
  // オプション取得
  const options: OptionData[] = bases.map(base => ({value: String(base.id), text: base.name}));
  // ルーターオブジェクト
  const router = useRouter();

  // 拠点変更処理
  const handleChangeBase = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択された拠点ID取得
    const baseId = Number(event.currentTarget.value);
    // トップページ遷移
    router.push(PAGE_PATHS.TOP(baseId));
  }

  // ログアウト処理
  const handleLogout = async () => {
    try{
      // ログアウトAPIリクエスト
      logout();
    }catch(error){
      console.error(extractErrorMessages(error));
    }
  };

  return {options, handleChangeBase, handleLogout};

}