import { PAGE_SUB_TITLES, PAGE_TITLES } from "@/app/_constants/pageText";

// トップページ
const TopPage = () => {
  return(
    <>
      <h1>{PAGE_TITLES.TOP}</h1>
      <h2>{PAGE_SUB_TITLES.TOP.SHOPS_MAP}</h2>
      <h2>{PAGE_SUB_TITLES.TOP.RECENT_REVIEWS}</h2>
    </>
  );
};

export default TopPage;
