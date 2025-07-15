import { HANDLE_NAME } from "@/app/_constants/pageText";

// 送信ボタン
const SubmitButton = () => {
  return(
    <input type="submit" value={HANDLE_NAME.SUBMIT}/>
  );
};

export default SubmitButton;