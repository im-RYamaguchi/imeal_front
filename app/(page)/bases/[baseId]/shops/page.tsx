import { PAGE_TITLES } from "@/app/_constants/pageText";
import Shops from "@/app/_components/shops";
import { mockShops } from "@/___tests___/mocks/data";

// グルメ一覧ページ
const ShopsPage = () => {
  return(
    <>
      <h1>{PAGE_TITLES.SHOPS}</h1>
      <Shops shops={mockShops}/>
    </>
  );
};

export default ShopsPage;