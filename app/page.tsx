import Link from "next/link";


// ホームページ
const HomePage = () => {
  return(
    <>
      <h1>ホームページ</h1>
      <h2><Link href={'/bases/0/top'}>三茶ラボ</Link></h2>
    </>
      
  );
};

export default HomePage;