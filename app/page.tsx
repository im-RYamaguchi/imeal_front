import Link from "next/link";
import { PAGE_PATHS } from "./_constants/pagePath";
import { PAGE_TITLES } from "./_constants/pageText";
import { base } from "./_test/testData";


// ホームページ
const HomePage = () => {
  return(
    <>
      <h1>{PAGE_TITLES.HOME}</h1>
      <h2><Link href={PAGE_PATHS.TOP(base.id)}>{PAGE_TITLES.TOP}</Link></h2>
    </>
  );
};

export default HomePage;